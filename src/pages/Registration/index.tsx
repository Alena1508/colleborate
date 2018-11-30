import * as React from "react";
import CreateForm from "./CreateForm";
import { Link } from "react-router-dom";
import styles, { classes } from "./styles";
import { compose } from "recompose";
import { WithStyles, withStyles } from "@material-ui/core";

type ComponentProps = WithStyles<classes>;

class Registration extends React.Component<ComponentProps> {

  render () {
    const {classes} = this.props;
    return (
      <div>
        <h2 className={classes.pageTitle}>Registration</h2>
        <CreateForm/>
        <Link className={classes.link} to={`/login`}>Login</Link>
      </div>
    );
  }
}

export default compose(
  withStyles(styles, { withTheme: true })
)(Registration);
