import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    padding: theme.spacing(0.5, 0.5, 0),
    justifyContent: "space-between",
    display: "flex",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  textField: {
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    margin: theme.spacing(1, 0.5, 1.5),
    "& .MuiSvgIcon-root": {
      marginRight: theme.spacing(0.5),
    },
    "& .MuiInput-underline:before": {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  },
}));

export { useStyles };
