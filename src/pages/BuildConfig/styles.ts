import { Theme, StyleRules } from "@material-ui/core/styles";

export type classes = "root" | "title" | "table";

export default (theme: Theme): StyleRules<classes> => ({
  root: {
  },
  title: {
    padding: theme.spacing.unit * 3
  },
  table: {
  }
});
