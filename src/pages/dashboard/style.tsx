import { styled } from "@mui/material/styles";

const PageHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export { PageHeader };
