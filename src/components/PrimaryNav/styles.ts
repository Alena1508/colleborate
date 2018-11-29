import { Theme, StyleRules } from "@material-ui/core/styles";

export type classes = "root" | "header" | "menu";

export default (theme: Theme): StyleRules<classes> => ({
  root: {
  },
  header: {
    ...theme.mixins.toolbar
  },
  menu: {
  }
});
