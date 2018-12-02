import * as React from "react";
import LoginForm from "./LoginForm";
import styles, { classes } from "./styles";
import { withStyles, WithStyles } from "@material-ui/core";
import { compose } from "recompose";

type ComponentProps = WithStyles<classes>;

class Login extends React.Component<ComponentProps> {

  render () {
    const {classes} = this.props;
    return (
      <div>
        <h2 className={classes.pageTitle}>Login</h2>
        <LoginForm />
      </div>
    );
  }
}

export default compose(
  withStyles(styles, { withTheme: true })
)(Login);
