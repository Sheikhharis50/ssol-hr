import { Theme, styled } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

const useDepartmentStyles = makeStyles((theme: Theme) => ({
  actions: {
    color: theme.palette.text.secondary,
  },
  textPrimary: {
    color: theme.palette.text.primary,
  },
}));

const ButtonContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export { useDepartmentStyles, ButtonContainer };
