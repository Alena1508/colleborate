import * as React from "react";
import { reduxForm, InjectedFormProps, Field } from "redux-form";
import { bindRoutineToReduxForm } from "redux-saga-routines";
import { Button } from "@material-ui/core";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { compose } from "recompose";
import { SignUpAction } from "../../../actions";
import { Payload } from "../../../routines/SignUp";
import FormTextField from "./fragments/FormTextField";
import styles, { classes } from "./styles";


type ComponentProps = InjectedFormProps<Payload> & WithStyles<classes>;


interface ComponentState {}

type State = Readonly<CreateForm>;

class CreateForm extends React.Component<ComponentProps, State, ComponentState> {
  submitCreateForm = bindRoutineToReduxForm(SignUpAction);

  componentDidMount () {

    this.props.reset();
  }

  render () {
    console.log(this.props);
    const { classes, handleSubmit, submitting } = this.props;

    return (
      <form className={classes.root} onSubmit={handleSubmit}>
        <div className="form-header">
          <h4 className="form-title">Registration</h4>
        </div>
        <Field
          name={"email"}
          component={FormTextField}
          label={"Email"}
          className={classes.valueField}
        />
        <Field
          name={"password"}
          component={FormTextField}
          label={"Password"}
          className={classes.valueField}
        />
        <Button
          className={classes.submitButton}
          color={"primary"}
          onClick={handleSubmit(this.submitCreateForm)}
          disabled={submitting}
        >
          Submit
        </Button>
      </form>
    );
  }
}

export default compose(
  reduxForm<Payload>({
    form: "sign-up"
  }),
  withStyles(styles, { withTheme: true }),
)(CreateForm);
