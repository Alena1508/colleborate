import { Theme, StyleRules } from "@material-ui/core/styles";

export type classes = "root" | "valueField" | "submitButton" | "pageTitle" | "link";

export default (theme: Theme): StyleRules<classes> => ({
  root: {
    padding: theme.spacing.unit * 3,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  valueField: {
    margin: theme.spacing.unit,
    width: "50%"
  },
  submitButton: {
    margin: theme.spacing.unit
  },
  pageTitle: {
    textAlign: "center"
  },
  link: {
    display: "block",
    textAlign: "center"
  }
});
