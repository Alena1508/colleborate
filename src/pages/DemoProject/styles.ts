import { Theme, StyleRules } from "@material-ui/core/styles";

export type Classes = "loaderContainer";

export default (theme: Theme): StyleRules<Classes> => ({
  loaderContainer: {
    margin: "auto"
  }
});
