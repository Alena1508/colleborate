import * as _ from "lodash";
import * as React from "react";
import { Typography, Paper, Table, TableHead, TableBody, TableRow, TableCell } from "@material-ui/core";
import { withStyles, WithStyles } from "@material-ui/core/styles";
import { compose } from "recompose";
import config from "../../config";
import styles, { classes } from "./styles";

type ComponentProps = WithStyles<classes>;

interface ComponentState {
}

class BuildConfig extends React.Component<ComponentProps, ComponentState> {
  render () {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <Typography className={classes.title} color={"inherit"} variant={"headline"}>
          Build Configuration
        </Typography>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Variable</TableCell>
              <TableCell>Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {_.map(config, (value, key) => {
              return (
                <TableRow key={key}>
                  <TableCell>{key}</TableCell>
                  <TableCell>{value ? (<pre>{value.toString()}</pre>) : (<i>undefined</i>)}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default compose(
  withStyles(styles, { withTheme: true })
)(BuildConfig);
