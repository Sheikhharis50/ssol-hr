import React from "react";
import Box from "@mui/material/Box";

type Props = {};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, m: "64px 0 0 0" }}>
      <section className="content">{children}</section>
    </Box>
  );
};

export default Layout;
