import * as React from "react";
import { reduxForm, InjectedFormProps, Field } from "redux-form";
import { bindRoutineToReduxForm } from "redux-saga-routines";
import { Button } from "@material-ui/core";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { compose } from "recompose";
import { SignUpAction } from "../../../actions";
import { Payload } from "../../../routines/SignUp";
import FormTextField from "../../../components/common/formElements/input/FormTextField";
import styles, { classes } from "../styles";


type ComponentProps = InjectedFormProps<Payload> & WithStyles<classes>;



class RegistationForm extends React.Component<ComponentProps> {
  submitHandler = bindRoutineToReduxForm(SignUpAction);

  componentDidMount () {
    this.props.reset();
  }

  render () {
    console.log(this.props);
    const {classes, handleSubmit, submitting} = this.props;

    return (
      <React.Fragment>
        <form className={classes.root} onSubmit={handleSubmit}>
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
            onClick={handleSubmit(this.submitHandler)}
            disabled={submitting}
          >
            Submit
          </Button>
        </form>
      </React.Fragment>
    );
  }
}

export default compose(
  reduxForm<Payload>({
    form: "sign-up"
  }),
  withStyles(styles, {withTheme: true}),
)(RegistationForm);
