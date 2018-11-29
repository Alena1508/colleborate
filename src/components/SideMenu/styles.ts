import { Theme, StyleRules } from "@material-ui/core/styles";
import { sideMenuWidthInUnits } from "../../theme";

export type classes = "root" | "drawerPaper" | "drawerPaperClosed";

export default (theme: Theme): StyleRules<classes> => ({
  root: {
  },
  drawerPaper: {
    width: theme.spacing.unit * sideMenuWidthInUnits,
    whiteSpace: "nowrap",
    [theme.breakpoints.up("md")]: {
      position: "relative",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    }
  },
  drawerPaperClosed: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    }
  }
});
