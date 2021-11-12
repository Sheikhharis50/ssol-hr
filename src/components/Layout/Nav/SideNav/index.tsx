import React from "react";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import { useTheme } from "@mui/material/styles";
import { ColorContext } from "../../../../hooks/withTheme";
import { Drawer, DrawerHeader, DrawerFooter } from "./style";
import Button from "../../../Common/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../hooks/useAuth";
import { MenuItems } from "./constants";

type Props = {
  open: boolean;
  handleDrawerClose: VoidFunction;
};

const SideNav: React.FC<Props> = ({ open, handleDrawerClose }) => {
  const theme = useTheme();
  let auth = useAuth();
  let navigate = useNavigate();
  const colorMode = React.useContext(ColorContext);

  const handelLogout = () => {
    auth.signout(() => navigate("/"));
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
        {MenuItems.map(({ text = "", Icon }, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{Icon ? <Icon /> : null}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem button onClick={colorMode.toggleColorMode}>
          <ListItemIcon>
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon />
            ) : (
              <Brightness4Icon />
            )}
          </ListItemIcon>
          <ListItemText
            primary={`${theme.palette.mode === "dark" ? "Light" : "Dark"} Mode`}
          />
        </ListItem>
      </List>
      <DrawerFooter>
        <Button
          text="Logout"
          Icon={LogoutOutlinedIcon}
          onClick={handelLogout}
        />
      </DrawerFooter>
    </Drawer>
  );
};

export default SideNav;
