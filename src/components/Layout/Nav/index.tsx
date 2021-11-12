import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import useMediaQuery from "@mui/material/useMediaQuery";
import { TABLET } from "../../../utils/constants";
import TopNav from "./TopNav";
import SideNav from "./SideNav";

const NavBar = () => {
  const isTab = useMediaQuery(`(max-width:${TABLET})`);
  const [open, setOpen] = React.useState(true);

  React.useEffect(() => {
    setOpen(!isTab);
  }, [isTab]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <TopNav open={open} isTab={isTab} handleDrawerOpen={handleDrawerOpen} />
      <SideNav open={open} handleDrawerClose={handleDrawerClose} />
    </React.Fragment>
  );
};

export default NavBar;
