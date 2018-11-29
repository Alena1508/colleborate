import * as React from "react";
import { Dispatch, AnyAction } from "redux";
import { connect } from "react-redux";
import { Hidden, Drawer } from "@material-ui/core";
import { withStyles, WithStyles, WithTheme } from "@material-ui/core/styles";
import { compose } from "recompose";
import { classNames } from "../../utils";
import { State } from "../../reducers";
import { openSideMenu, closeSideMenu } from "../../actions";
import PrimaryNav from "../PrimaryNav";
import styles, { classes } from "./styles";

interface ComponentPropsFromDispatch {
  performOpenSideMenu: () => void;
  performCloseSideMenu: () => void;
}

interface ComponentPropsFromState {
  isSideMenuOpened: boolean;
}

type ComponentProps = ComponentPropsFromDispatch & ComponentPropsFromState & WithStyles<classes> & WithTheme;

interface ComponentState {
}

class SideMenu extends React.Component<ComponentProps, ComponentState> {
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
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <Hidden mdUp>
          <Drawer
            variant={"temporary"}
            anchor={theme.direction === "rtl" ? "right" : "left"}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
            open={this.props.isSideMenuOpened}
            onClose={this.handleToggleSideMenu}
          >
            <PrimaryNav />
          </Drawer>
        </Hidden>
        <Hidden smDown implementation={"css"}>
          <Drawer
            variant={"permanent"}
            classes={{
              paper: classNames(classes.drawerPaper, !this.props.isSideMenuOpened && classes.drawerPaperClosed)
            }}
            open={this.props.isSideMenuOpened}
            onClose={this.handleToggleSideMenu}
          >
            <PrimaryNav />
          </Drawer>
        </Hidden>
      </div>
    );
  }
}

export default compose(
  connect(SideMenu.mapStateToProps, SideMenu.mapDispatchToProps),
  withStyles(styles, { withTheme: true })
)(SideMenu);
