import React from "react";
import { Admin, Resource } from "react-admin";

import Layout from "../../components/atoms/DashboardLayout";
import DashboardCustomRoutes from "../../components/atoms/DashboardCustomRoutes";
import LoginWithTheme from "../login";

import { dataProvider, authProvider } from "./providers";

import {
  Dashboard as DashboardIcon,
  Assignment as AssignmentIcon,
  Assessment as AssessmentIcon,
} from "@mui/icons-material";

import Overview from "../../components/organism/DashboardTabs/Overview";
import Tests from "../../components/organism/DashboardTabs/Tests";
import MyResults from "../../components/organism/DashboardTabs/MyResults";

const Dashboard = () => {
  return (
    <div>
      <Admin
        layout={Layout}
        customRoutes={DashboardCustomRoutes}
        authProvider={authProvider}
        dataProvider={dataProvider}
        loginPage={LoginWithTheme}
      >
        <Resource name="overview" list={Overview} icon={DashboardIcon} />
        <Resource name="tests" list={Tests} icon={AssignmentIcon} />
        <Resource name="my results" list={MyResults} icon={AssessmentIcon} />
      </Admin>
    </div>
  );
};

export default Dashboard;
