import { Theme, styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const getColor = (
  theme: Theme,
  color: string,
  type: "main" | "hover" = "main"
) => {
  const palette: any = {
    dark: { main: "#333", hover: "#666", dark: theme.palette.primary.light },
    royal: {
      main: "#035397",
      hover: "#5089C6",
      dark: theme.palette.primary.light,
    },
  };
  if (palette[color]) {
    if (theme.palette.mode !== "dark") return palette[color][type];
    return palette[color]["dark"];
  }
  return "";
};

export { getColor, Item };
