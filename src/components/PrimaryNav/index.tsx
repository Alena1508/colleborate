import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import { ListItem, ListItemIcon, ListItemText, Divider } from "@material-ui/core";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import BuildConfigIcon from "@material-ui/icons/Settings";
import { compose } from "recompose";
import { Routes } from "../App";
import styles, { classes } from "./styles";

type ComponentProps = RouteComponentProps<undefined> & WithStyles<classes>;

interface ComponentState {
}

class PrimaryNav extends React.Component<ComponentProps, ComponentState> {
  navigateToRegistration = () => this.props.history.push(Routes.Registration);

  render () {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <div className={classes.header} />
        <nav className={classes.menu}>
          <Divider />
          <>
            <ListItem button onClick={this.navigateToRegistration}>
              <ListItemIcon>
                <BuildConfigIcon />
              </ListItemIcon>
              <ListItemText primary={"Registration"} />
            </ListItem>
          </>
          <Divider />
          <>
          </>
        </nav>
      </div>
    );
  }
}

export default compose(
  withRouter,
  withStyles(styles, { withTheme: true })
)(PrimaryNav);
