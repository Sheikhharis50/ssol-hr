import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { isEmptyObj } from "../utils";

type Props = {
  component: JSX.Element;
  privateRoute?: boolean;
};

export const AppRoute: React.FC<Props> = ({
  component,
  privateRoute = false,
}) => {
  let auth = useAuth();
  let location = useLocation();

  if (privateRoute && !auth.user && isEmptyObj(auth.user)) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return component;
};
