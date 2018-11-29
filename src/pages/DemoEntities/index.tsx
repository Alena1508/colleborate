import * as React from "react";
import { Dispatch, AnyAction } from "redux";
import { connect } from "react-redux";
import { Typography, Paper } from "@material-ui/core";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { compose } from "recompose";
import { DemoEntity } from "../../models/demoEntity";
import { State } from "../../reducers";
import CreateForm from "../Registration/CreateForm";
import styles, { classes } from "./styles";

interface ComponentsPropsFromDispatch {
}

interface ComponentsPropsFromState {
  list: DemoEntity[];
}

type ComponentProps = ComponentsPropsFromDispatch & ComponentsPropsFromState & WithStyles<classes>;

interface ComponentState {
}

class DemoEntities extends React.Component<ComponentProps, ComponentState> {
  static mapStateToProps (state: State): ComponentsPropsFromState {
    return {
      list: state.demoEntities.list.slice()
    };
  }

  static mapDispatchToProps (dispatch: Dispatch<AnyAction>): ComponentsPropsFromDispatch {
    return {
    };
  }

  render () {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Paper className={classes.box}>
          <Typography className={classes.title} color={"inherit"} variant={"headline"}>
            Регистрация
          </Typography>
          <CreateForm/>
        </Paper>
      </div>
    );
  }
}

export default compose(
  connect(DemoEntities.mapStateToProps, DemoEntities.mapDispatchToProps),
  withStyles(styles, { withTheme: true })
)(DemoEntities);
