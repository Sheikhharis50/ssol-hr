import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { typographyStyle } from "../style";

const useTypoStyles = makeStyles(typographyStyle);

function Success(props: any) {
  const classes = useTypoStyles();
  const { children } = props;
  return (
    <div className={`${classes.defaultFontStyle} ${classes.successText}`}>
      {children}
    </div>
  );
}

Success.propTypes = {
  children: PropTypes.node,
};

export default Success;
