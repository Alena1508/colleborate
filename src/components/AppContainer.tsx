import * as React from "react";
import { Dispatch, AnyAction } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "recompose";
import { State } from "../reducers";
import App from "./App";

export interface ComponentPropsFromDispatch {
}

export interface ComponentPropsFromState {
}

export type ComponentProps = ComponentPropsFromDispatch & ComponentPropsFromState;

export interface ComponentState {}

class AppContainer extends React.Component<ComponentProps, ComponentState> {
  constructor (props: ComponentProps, context?: any) {
    super(props, context);
  }

  static mapStateToProps (state: State): ComponentPropsFromState {
    return {
    };
  }

  static mapDispatchToProps (dispatch: Dispatch<AnyAction>): ComponentPropsFromDispatch {
    return {
    };
  }

  render () {
    return (
      <App />
    );
  }
}

export default compose(
  withRouter,
  connect(AppContainer.mapStateToProps, AppContainer.mapDispatchToProps)
)(AppContainer);
