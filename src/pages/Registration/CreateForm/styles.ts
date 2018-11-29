import { Theme, StyleRules } from "@material-ui/core/styles";

export type classes = "root" | "valueField" | "submitButton";

export default (theme: Theme): StyleRules<classes> => ({
  root: {
    padding: theme.spacing.unit * 3,
    height: 500,
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
  }
});
