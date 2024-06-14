import React from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/BarChart";
import UserManagementIcon from "@mui/icons-material/People";
import GymManagementIcon from "@mui/icons-material/FitnessCenter";
import SubscriptionManagementIcon from "@mui/icons-material/Payment";
import AnalyticsReportingIcon from "@mui/icons-material/Assessment";
import CommunicationSupportIcon from "@mui/icons-material/Chat";
import DataManagementIcon from "@mui/icons-material/Storage";

function Sidebar() {
  return (
    <div className="h-screen fixed top-15 left-0 bg-white-800  w-64 py-4 px-6">
      <h2 className="text-black text-2xl mb-4">Admin Dashboard</h2>

      <ul>
        <li ><Link to="/dashboard" className="text-white block py-2 gap-2 hover:bg-gray-700 focus:bg focus:bg-violet-700"><DashboardIcon  /> Dashboard</Link></li>
        <li><Link to="/user-management" className="text-white block py-2  hover:bg-gray-700 focus:bg focus:bg-violet-700"><UserManagementIcon /> User Management</Link></li>
        <li><Link to="/gym-management" className="text-white block py-2  hover:bg-gray-700 focus:bg focus:bg-violet-700"><GymManagementIcon /> Gym Management</Link></li>
        <li><Link to="/subscription-management"  className="text-white block py-2  hover:bg-gray-700 focus:bg focus:bg-violet-700"><SubscriptionManagementIcon /> Subscription Management</Link></li>
        <li><Link to="/analytics-reporting"  className="text-white block py-2  hover:bg-gray-700 focus:bg focus:bg-violet-700"> <AnalyticsReportingIcon /> Analytics & Reporting</Link></li>
        <li><Link to="/communication-support" className="text-white block py-2  hover:bg-gray-700 focus:bg focus:bg-violet-700"><CommunicationSupportIcon /> Communication & Support</Link></li>
        <li><Link to="/data-management" className="text-white block py-2  hover:bg-gray-700 focus:bg focus:bg-violet-700"><DataManagementIcon /> Data Management</Link></li>
      </ul>

      {/* <div class="hidden sm:ml-6 sm:block">
        <div class="flex space-x-4">
          <ul>
            <li>
              <Link
                to="/dashboard"
                className="text-white block py-2 px-4 hover:bg-gray-700 focus:bg focus:bg-violet-700"
              >
                <DashboardIcon />
              </Link>
            </li>
            <li>
              <Link
                to="/user-management"
                className="text-white block py-2 px-4 hover:bg-gray-700 focus:bg focus:bg-violet-700"
              >
                <UserManagementIcon />
              </Link>
            </li>
            <li>
              <Link
                to="/gym-management"
                className="text-white block py-2 px-4 hover:bg-gray-700 focus:bg focus:bg-violet-700"
              >
                <GymManagementIcon />
              </Link>
            </li>
            <li>
              <Link
                to="/subscription-management"
                className="text-white block py-2 px-4 hover:bg-gray-700 focus:bg focus:bg-violet-700"
              >
                <SubscriptionManagementIcon />
              </Link>
            </li>
            <li>
              <Link
                to="/analytics-reporting"
                className="text-white block py-2 px-4 hover:bg-gray-700 focus:bg focus:bg-violet-700"
              >
                <AnalyticsReportingIcon />
              </Link>
            </li>
            <li>
              <Link
                to="/communication-support"
                className="text-white block py-2 px-4 hover:bg-gray-700 focus:bg focus:bg-violet-700"
              >
                <CommunicationSupportIcon />
              </Link>
            </li>
            <li>
              <Link
                to="/data-management"
                className="text-white block py-2 px-4 hover:bg-gray-700 focus:bg focus:bg-violet-700"
              >
                <DataManagementIcon />
              </Link>
            </li>
          </ul>
        </div>
      </div> */}
    </div>
    
  );
}

export default Sidebar;
