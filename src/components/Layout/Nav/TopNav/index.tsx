import React from "react";
import { AppBar } from "./style";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Header from "../../Header";

type Props = {
  open: boolean;
  isTab: boolean;
  handleDrawerOpen: VoidFunction;
};

const TopNav: React.FC<Props> = ({ open, isTab, handleDrawerOpen }) => {
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: "36px",
            ...(open && !isTab && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Header />
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
