import * as React from "react";
import { Provider as ReduxProvider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { CssBaseline, CircularProgress } from "@material-ui/core";
import { MuiThemeProvider, withStyles, WithStyles } from "@material-ui/core/styles";
import { compose } from "recompose";
import { createBrowserHistory } from "history";
import { createLoader as createStorageLoader } from "redux-storage";
import createStorageEngine from "redux-storage-engine-localstorage";
import { createStore } from "../../store";
import { createTheme } from "../../theme";
import AppContainer from "../../components/AppContainer";
import styles, { Classes } from "./styles";

type ComponentProps = WithStyles<Classes>;

interface ComponentState {
  storeLoaded: boolean;
}

class DemoProject extends React.Component<ComponentProps, ComponentState> {
  private readonly theme = createTheme();
  private readonly history = createBrowserHistory();
  private readonly storageEngine = createStorageEngine("app");
  private readonly store = createStore(this.storageEngine, this.history);

  constructor (props: ComponentProps, context?: any) {
    super(props, context);

    this.state = {
      ...this.state,
      storeLoaded: false
    };

    const loadStore = createStorageLoader(this.storageEngine);
    loadStore(this.store)
      .then(() => this.setState({ storeLoaded: true }));
  }

  render () {
    const { classes } = this.props;

    if (!this.state.storeLoaded) {
      return (
        <MuiThemeProvider theme={this.theme}>
          <CssBaseline />
          <div className={classes.loaderContainer}>
            <CircularProgress />
          </div>
        </MuiThemeProvider>
      );
    }

    return (
      <ReduxProvider store={this.store}>
        <ConnectedRouter history={this.history}>
          <MuiThemeProvider theme={this.theme}>
            <CssBaseline />
            <AppContainer />
          </MuiThemeProvider>
        </ConnectedRouter>
      </ReduxProvider>
    );
  }
}

export default compose(
  withStyles(styles, { withTheme: true })
)(DemoProject);
