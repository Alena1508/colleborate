import * as React from "react";
import { Route, Switch } from "react-router";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { compose } from "recompose";
import Header from "../Header";
// import SideMenu from "../SideMenu";
import Home from "../Home";
import Registration from "../../pages/Registration";
import styles, { classes } from "./styles";
import Login from "../../pages/Login";

type ComponentProps = WithStyles<classes>;

interface ComponentState {
}

export const Routes = {
  Home: "/",
  Registration: "/registration",
  Login: "/login",
  // DemoEntities: "/demo-entities",
};

class App extends React.Component<ComponentProps, ComponentState> {
  render () {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Header/>
        {/*<SideMenu/>*/}
        <div className={classes.mainContainer}>
          <div className={classes.headerSpacer} />
          <main className={classes.contentContainer}>
            <Switch>
              <Route path={Routes.Home} exact component={Home} />
              <Route path={Routes.Registration} exact component={Registration} />
              <Route path={Routes.Login} exact component={Login} />
              {/*<Route path={Routes.DemoEntities} exact component={DemoEntities} />*/}
            </Switch>
          </main>
        </div>
      </div>
    );
  }
}

export default compose(
  withStyles(styles, { withTheme: true })
)(App);
