import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
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
      {/* TODO: will be removed if not needed. */}
      {/* <div className="navs">
        <Button>
          <Link to="/">Dashboard</Link>
        </Button>
        <Button>
          <Link to="/about">About</Link>
        </Button>
      </div> */}
    </section>
  );
};

export default Header;
