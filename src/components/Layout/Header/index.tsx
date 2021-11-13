import React from "react";
import Typography from "@mui/material/Typography";
import { useStyles } from "./style";
import { APP_NAME } from "../../../utils/config";

type Props = {};

const Header: React.FC<Props> = (props) => {
  const classes = useStyles(props);

  return (
    <section className={classes.root}>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        {APP_NAME}
      </Typography>
    </section>
  );
};

export default Header;
