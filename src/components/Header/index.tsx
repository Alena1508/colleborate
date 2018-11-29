import * as React from "react";
import { Dispatch, AnyAction } from "redux";
import { connect } from "react-redux";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import { compose } from "recompose";
import { State } from "../../reducers";
import { openSideMenu, closeSideMenu } from "../../actions";
import styles, { classes } from "./styles";

interface ComponentPropsFromDispatch {
  performOpenSideMenu: () => void;
  performCloseSideMenu: () => void;
}

interface ComponentPropsFromState {
  isSideMenuOpened: boolean;
}

type ComponentProps = ComponentPropsFromDispatch & ComponentPropsFromState & WithStyles<classes>;

interface ComponentState {
}

class Header extends React.Component<ComponentProps, ComponentState> {
  static mapStateToProps (state: State): ComponentPropsFromState {
    return {
      isSideMenuOpened: state.app.isSideMenuOpened
    };
  }

  static mapDispatchToProps (dispatch: Dispatch<AnyAction>): ComponentPropsFromDispatch {
    return {
      performOpenSideMenu: () => dispatch(openSideMenu.perform()),
      performCloseSideMenu: () => dispatch(closeSideMenu.perform())
    };
  }

  handleToggleSideMenu = () => {
    if (!this.props.isSideMenuOpened) {
      this.props.performOpenSideMenu();
    } else {
      this.props.performCloseSideMenu();
    }
  }

  render () {
    const { classes } = this.props;

    return (
      <header className={classes.root}>
         <AppBar className={classes.appBar}>
          <Toolbar disableGutters>
            <IconButton
              color={"inherit"}
              className={classes.menuButton}
              onClick={this.handleToggleSideMenu}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant={"title"} color={"inherit"} noWrap>
              Demo Project
            </Typography>
          </Toolbar>
        </AppBar>
      </header>
    );
  }
}

export default compose(
  connect(Header.mapStateToProps, Header.mapDispatchToProps),
  withStyles(styles, { withTheme: true })
)(Header);
