import React from "react";
import { Admin, Resource } from "react-admin";

import Layout from "../../components/atoms/DashboardLayout";
import CustomRoutes from "../../components/atoms/DashboardCustomRoutes";
import authProvider from "../../components/atoms/DashboardAuthProvider";
import restProvider from "ra-data-simple-rest";
import LoginWithTheme from "../login";

import {
  Dashboard as DashboardIcon,
  Assignment as AssignmentIcon,
  Assessment as AssessmentIcon,
} from "@mui/icons-material";

import Overview from "../../components/organism/DashboardTabs/Overview";
import Tests from "../../components/organism/DashboardTabs/Tests";
import MyResults from "../../components/organism/DashboardTabs/MyResults";

import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div>
      <Admin
        layout={Layout}
        customRoutes={CustomRoutes}
        authProvider={authProvider}
        dataProvider={restProvider("http://localhost:3000")}
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
