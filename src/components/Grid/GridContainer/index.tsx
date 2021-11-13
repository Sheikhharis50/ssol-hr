import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import { gridStyles } from "./style";

const useGridStyles = makeStyles(gridStyles);

const GridContainer: React.FC<any> = (props: any) => {
  const classes = useGridStyles();
  const { children, ...rest } = props;
  return (
    <Grid container {...rest} className={classes.grid} spacing={2}>
      {children}
    </Grid>
  );
};

GridContainer.propTypes = {
  children: PropTypes.node,
};

export default GridContainer;
