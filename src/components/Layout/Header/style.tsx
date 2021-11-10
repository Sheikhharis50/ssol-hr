import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/system";

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: "100%",
    display: "flex",
    "& a": {
      textDecoration: "inherit",
      color: "var(--color-light)",
    },
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));
