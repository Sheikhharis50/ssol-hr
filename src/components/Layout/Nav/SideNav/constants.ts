import BusinessIcon from "@mui/icons-material/Business";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import AssessmentIcon from "@mui/icons-material/Assessment";

type MenuItemType = {
  text: string;
  Icon?: any;
};

const MenuItems: Array<MenuItemType> = [
  {
    text: "Dashboard",
    Icon: DashboardIcon,
  },
  {
    text: "Departments",
    Icon: BusinessIcon,
  },
  {
    text: "Employees",
    Icon: PersonIcon,
  },
  {
    text: "Attendance",
    Icon: AssignmentTurnedInIcon,
  },
  {
    text: "Reports",
    Icon: AssessmentIcon,
  },
];

export { MenuItems };
