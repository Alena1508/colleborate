import { Theme, StyleRules } from "@material-ui/core/styles";

export type classes = "root" | "appBar" | "menuButton";

export default (theme: Theme): StyleRules<classes> => ({
  root: {
    position: "absolute"
  },
  appBar: {
    [theme.breakpoints.up("md")]: {
      zIndex: theme.zIndex.drawer + 1
    }
  },
  menuButton: {
    marginLeft: 8,
    marginRight: 8
  }
});
