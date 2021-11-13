import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import { gridItemStyles } from "./style";

const useGridItemStyles = makeStyles(gridItemStyles);

const GridItem: React.FC<any> = (props: any) => {
  const classes = useGridItemStyles();
  const { children, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
};

GridItem.propTypes = {
  children: PropTypes.node,
};

export default GridItem;
