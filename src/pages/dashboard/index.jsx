import React from "react";
import { Admin, Resource } from "react-admin";
import authProvider from "./authProvider";
import restProvider from "ra-data-simple-rest";
import Layout from "../../components/molecules/DashboardLayout/Layout";

import {
  Dashboard as DashboardIcon,
  Assignment as AssignmentIcon,
  Assessment as AssessmentIcon,
} from "@mui/icons-material";

import Overview from "../../components/organism/Dashboard/Overview";
import Tests from "../../components/organism/Dashboard/Tests";
import MyResults from "../../components/organism/Dashboard/MyResults";

import CustomRoutes from "./customRoutes";

import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div>
      <Admin
        layout={Layout}
        customRoutes={CustomRoutes}
        authProvider={authProvider}
        dataProvider={restProvider("http://localhost:3000")}
      >
        <Resource name="overview" list={Overview} icon={DashboardIcon} />
        <Resource name="tests" list={Tests} icon={AssignmentIcon} />
        <Resource name="my results" list={MyResults} icon={AssessmentIcon} />
      </Admin>
    </div>
  );
};

export default Dashboard;
