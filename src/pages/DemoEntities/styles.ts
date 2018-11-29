import { Theme, StyleRules } from "@material-ui/core/styles";

export type classes = "root" | "box" | "title" | "button" | "demoEntitiesTable";

export default (theme: Theme): StyleRules<classes> => ({
  root: {
  },
  box: {
    marginBottom: theme.spacing.unit * 3
  },
  title: {
    padding: theme.spacing.unit * 3
  },
  button: {
    margin: theme.spacing.unit
  },
  demoEntitiesTable: {
  }
});
