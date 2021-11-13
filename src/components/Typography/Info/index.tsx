import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";
import { typographyStyle } from "../style";

const useTypoStyles = makeStyles(typographyStyle);

function Info(props: any) {
  const classes = useTypoStyles();
  const { children } = props;
  return (
    <div className={`${classes.defaultFontStyle} ${classes.infoText}`}>
      {children}
    </div>
  );
}

Info.propTypes = {
  children: PropTypes.node,
};

export default Info;
