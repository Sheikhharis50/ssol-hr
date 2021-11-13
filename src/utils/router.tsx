import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { isEmptyObj } from "../utils";

// Pages
import DashboardPage from "../pages/dashboard";
import LoginPage from "../pages/login";
import AboutPage from "../pages/about";
import DepartmentsPage from "../pages/departments";
import AddDepartmentsPage from "../pages/departments/add-department";
import EmployeesPage from "../pages/employees";
import ReportsPage from "../pages/reports";
import AttendancePage from "../pages/attendance";

type RoutesType = {
  text: string;
  path?: string;
  Component: React.FC<any>;
  privateRoute?: boolean;
};

const AppRoutes: Array<RoutesType> = [
  {
    text: "Dashboard",
    path: "/",
    Component: DashboardPage,
    privateRoute: true,
  },
  {
    text: "Login",
    path: "/login",
    Component: LoginPage,
  },
  {
    text: "About",
    path: "/about",
    Component: AboutPage,
  },
  {
    text: "Departments",
    path: "/departments",
    Component: DepartmentsPage,
    privateRoute: true,
  },
  {
    text: "Add Department",
    path: "/departments/add",
    Component: AddDepartmentsPage,
    privateRoute: true,
  },
  {
    text: "Employees",
    path: "/employees",
    Component: EmployeesPage,
    privateRoute: true,
  },
  {
    text: "Attendance",
    path: "/attendance",
    Component: AttendancePage,
    privateRoute: true,
  },
  {
    text: "Reports",
    path: "/reports",
    Component: ReportsPage,
    privateRoute: true,
  },
];

type Props = {
  Component: any;
  privateRoute?: boolean;
};

const AppRoute: React.FC<Props> = ({ Component, privateRoute = false }) => {
  let auth = useAuth();
  let location = useLocation();

  if (privateRoute && !auth.user && isEmptyObj(auth.user)) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return Component;
};

export { AppRoute, AppRoutes };
