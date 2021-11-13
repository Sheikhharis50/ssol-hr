import React from "react";
import Button from "@mui/material/Button";
import { useBtnStyles } from "./style";

type Props = {
  Icon?: any;
  text: string;
  fullWidth?: boolean;
  onClick?: any;
  color?: "primary" | "secondary" | "info" | "error" | "success" | "warning";
  extraColor?: "dark" | "royal";
  className?: string;
  style?: Object;
  disabled?: boolean;
  type?: "button" | "submit";
  size?: "small" | "medium" | "large";
};

const AppButton: React.FC<Props> = ({
  Icon,
  text,
  fullWidth = true,
  onClick,
  color = "info",
  className = "",
  style = {},
  disabled = false,
  extraColor,
  type = "button",
  size = "medium",
}) => {
  const classes = useBtnStyles({ extraColor });

  return (
    <React.Fragment>
      <Button
        classes={classes}
        className={className}
        style={style}
        variant="contained"
        fullWidth={fullWidth}
        endIcon={Icon ? <Icon /> : ""}
        color={color}
        onClick={onClick}
        disabled={disabled}
        type={type}
        size={size}
      >
        {text}
      </Button>
    </React.Fragment>
  );
};

export default AppButton;
