import BusinessIcon from "@mui/icons-material/Business";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AssessmentIcon from "@mui/icons-material/Assessment";

type MenuItemType = {
  text: string;
  Icon?: any;
  path?: string;
};

const MenuItems: Array<MenuItemType> = [
  {
    text: "Dashboard",
    Icon: DashboardIcon,
    path: "/",
  },
  {
    text: "Departments",
    Icon: BusinessIcon,
    path: "/departments",
  },
  {
    text: "Employees",
    Icon: PersonIcon,
    path: "/employees",
  },
  {
    text: "Attendance",
    Icon: AssignmentTurnedInIcon,
    path: "/attendance",
  },
  {
    text: "Reports",
    Icon: AssessmentIcon,
    path: "/reports",
  },
];

export { MenuItems };
