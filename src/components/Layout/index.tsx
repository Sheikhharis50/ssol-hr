import React from "react";
import Box from "@mui/material/Box";
import Nav from "./Nav";
import Footer from "./Footer";

type Props = {};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Nav />
      <Box component="main" sx={{ flexGrow: 1, p: 3, m: "64px 0 0 0" }}>
        <section className="content">{children}</section>
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
