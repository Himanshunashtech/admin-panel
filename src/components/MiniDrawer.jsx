import React, { useState } from 'react';
import { Link } from "react-router-dom";
// import { Link } from '@mui/material';
import Search from "./Search";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/BarChart";
import UserManagementIcon from "@mui/icons-material/People";
import GymManagementIcon from "@mui/icons-material/FitnessCenter";
import SubscriptionManagementIcon from "@mui/icons-material/Payment";
import AnalyticsReportingIcon from "@mui/icons-material/Assessment";
import CommunicationSupportIcon from "@mui/icons-material/Chat";
import DataManagementIcon from "@mui/icons-material/Storage";
import Logo from "../components/assets/images/download.png";

const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);


  };

  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };


  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <div className=" w-screen flex justify-end relative ml-3 ">
            <div>
              <Search />
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <button type="button" class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
          <span class="absolute -inset-1.5"></span>
          <span class="sr-only">View notifications</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
          </svg>
        </button>

        <div class="relative ml-3">
         {/* <AccountPopover/> */}
          </div>
          </div>
    
          </div>
          <Typography variant="h6" noWrap component="div"></Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <div className="flex flex-row gap-10 mr-9 items-center">
            <img className="h-8 w-auto" src={Logo} alt="Your Company" />
            <h2 className="text-black text-1xl  ">Admin Dashboard</h2>
          </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div className="top-15 left-0  w-79  py-4 px-6">
          <ul>
            <li>
              {" "}
              <Link
                to="/dashboard"
                className="text-black block py-2 hover:bg-blue-700 focus:bg focus:bg-violet-700"
              >
                {!open ? (
                  <DashboardIcon />
                ) : (
                  <>
                    <DashboardIcon />
                    <>dashboard</>
                  </>
                )}{" "}
              </Link>
            </li>
            <li>
              <Link
                to="/user-management"
                className=" text-black block py-2  hover:bg-blue-700 focus:bg focus:bg-violet-700"
              >
                {!open ? (
                  <UserManagementIcon />
                ) : (
                  <>
                    <UserManagementIcon />
                    <>User Management</>
                  </>
                )}
              </Link>
            </li>
            <li>
              <Link
                to="/gym-management"
                className="text-black block py-2  hover:bg-blue-700 focus:bg focus:bg-violet-700"
              >
                {!open ? (
                  <GymManagementIcon />
                ) : (
                  <>
                    <GymManagementIcon />
                    <>Gym Management</>
                  </>
                )}
              </Link>
            </li>
            <li>
              <Link
                to="/subscription-management"
                className="text-black block py-2  hover:bg-blue-700 focus:bg focus:bg-violet-700"
              >
                {!open ? (
                  <SubscriptionManagementIcon />
                ) : (
                  <>
                    <SubscriptionManagementIcon />
                    <>Subscription Management</>
                  </>
                )}
              </Link>
            </li>
            <li>
              <Link
                to="/analytics-reporting"
                className="text-black block py-2  hover:bg-blue-700 focus:bg focus:bg-violet-700"
              >
                {!open ? (
                  <AnalyticsReportingIcon />
                ) : (
                  <>
                    <AnalyticsReportingIcon />
                    <>Analytics & Reporting</>
                  </>
                )}
              </Link>
            </li>
            <li>
              <Link
                to="/communication-support"
                className="text-black block py-2  hover:bg-blue-700 focus:bg focus:bg-violet-700"
              >
                {!open ? (
                  <CommunicationSupportIcon />
                ) : (
                  <>
                    <CommunicationSupportIcon />
                    <>Communication & Support</>
                  </>
                )}
              </Link>
            </li>
            <li>
              <Link
                to="/data-management"
                className="text-black block py-2  hover:bg-blue-700 focus:bg focus:bg-violet-700"
              >
                {!open ? (
                  <DataManagementIcon />
                ) : (
                  <>
                    <DataManagementIcon />
                    <>Data Management</>
                  </>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
    </Box>
  );
}
