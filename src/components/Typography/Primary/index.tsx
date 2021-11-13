import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { typographyStyle } from "../style";

const useTypoStyles = makeStyles(typographyStyle);

function Primary(props: any) {
  const classes = useTypoStyles();
  const { children } = props;
  return (
    <div className={`${classes.defaultFontStyle} ${classes.primaryText}`}>
      {children}
    </div>
  );
}

Primary.propTypes = {
  children: PropTypes.node,
};

export default Primary;
