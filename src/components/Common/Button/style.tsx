import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
import { getColor } from "../../style";

const useBtnStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: (props: any) => getColor(theme, props.extraColor),
    "&:hover": {
      backgroundColor: (props: any) =>
        getColor(theme, props.extraColor, "hover"),
    },
    minWidth: "max-content !important",
  },
}));

export { useBtnStyles };
