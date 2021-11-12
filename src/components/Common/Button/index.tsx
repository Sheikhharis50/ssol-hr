import React from "react";
import Button from "@mui/material/Button";

type Props = {
  Icon?: any;
  text: string;
  fullWidth?: boolean;
  onClick?: VoidFunction;
};

const AppButton: React.FC<Props> = ({
  Icon,
  text,
  fullWidth = true,
  onClick,
}) => {
  return (
    <React.Fragment>
      <Button
        variant="contained"
        fullWidth={fullWidth}
        endIcon={<Icon />}
        color="info"
        onClick={onClick}
      >
        {text}
      </Button>
    </React.Fragment>
  );
};

export default AppButton;
