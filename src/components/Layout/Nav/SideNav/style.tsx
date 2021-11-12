import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { drawerWidth, openedMixin, closedMixin } from "../style";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  backgroundColor: "#999",
  [theme.breakpoints.down("md")]: {
    position: "absolute",
  },
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const DrawerFooter = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  position: "absolute",
  bottom: "1em",
  width: "100%",
  padding: theme.spacing(0, 1),
}));

export { Drawer, DrawerHeader, DrawerFooter };
