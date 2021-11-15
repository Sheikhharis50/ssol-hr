import React from "react";
import Divider from "@mui/material/Divider";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import List from "@mui/material/List";
import { useTheme } from "@mui/material/styles";
import { ColorContext } from "../../../../hooks/withTheme";
import { Drawer, DrawerHeader, DrawerFooter } from "./style";
import Button from "../../../Common/Button";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../../../hooks/useAuth";
import { MenuItems } from "./constants";

type Props = {
  open: boolean;
  handleDrawerClose: VoidFunction;
};

const SideNav: React.FC<Props> = ({ open, handleDrawerClose }) => {
  const theme = useTheme();
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const colorMode = React.useContext(ColorContext);

  const handelLogout = () => {
    auth.signout(() => navigate("/"));
  };
  const handelPath = (path?: string) => {
    if (path) navigate(path);
  };
  const checkGivenRoute = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    else if (location.pathname.includes(path) && path !== "/") return true;
    return false;
  };

  return (
    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {MenuItems.map(({ text = "", Icon, path = "/" }, index) => (
          <ListItemButton
            key={index}
            onClick={() => handelPath(path)}
            selected={checkGivenRoute(path)}
          >
            <ListItemIcon>
              {Icon ? (
                <Tooltip title={text}>
                  <Icon />
                </Tooltip>
              ) : null}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
      <Divider />
      <List>
        <ListItemButton onClick={colorMode.toggleColorMode}>
          <ListItemIcon>
            <Tooltip
              title={`Change to ${
                theme.palette.mode === "dark" ? "Light" : "Dark"
              }`}
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7Icon />
              ) : (
                <Brightness4Icon />
              )}
            </Tooltip>
          </ListItemIcon>
          <ListItemText
            primary={`${theme.palette.mode === "dark" ? "Light" : "Dark"} Mode`}
          />
        </ListItemButton>
      </List>
      <DrawerFooter>
        {open ? (
          <Button
            text={"Logout"}
            Icon={LogoutOutlinedIcon}
            onClick={handelLogout}
            color="royal"
          />
        ) : (
          <Tooltip title="Logout">
            <IconButton color="primary" onClick={handelLogout}>
              <LogoutOutlinedIcon />
            </IconButton>
          </Tooltip>
        )}
      </DrawerFooter>
    </Drawer>
  );
};

export default SideNav;
