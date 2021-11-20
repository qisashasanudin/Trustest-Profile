import React from "react";
import { Admin, Resource } from "react-admin";

import Layout from "../../components/atoms/DashboardLayout";
import DashboardCustomRoutes from "../../components/atoms/DashboardCustomRoutes";
import LoginAndRegister from "../loginAndRegister";

import { dataProvider, authProvider } from "../../providers-react-admin";

import {
  People as UserIcon,
  Dashboard as DashboardIcon,
  Assignment as AssignmentIcon,
  Assessment as AssessmentIcon,
} from "@mui/icons-material";

import Overview from "./Overview";
import Quizes from "./Quizes";
import MyResults from "./MyResults";
// import { PostList, PostShow, PostCreate, PostEdit } from "./Posts";
import { UserList, UserShow, UserCreate, UserEdit } from "./Users";

const Dashboard = () => {
  return (
    <div>
      <Admin
        layout={Layout}
        customRoutes={DashboardCustomRoutes}
        authProvider={authProvider}
        dataProvider={dataProvider}
        loginPage={LoginAndRegister}
      >
        <Resource name="overview" list={Overview} icon={DashboardIcon} />
        <Resource name="quizes" list={Quizes} icon={AssignmentIcon} />
        <Resource name="my results" list={MyResults} icon={AssessmentIcon} />

        <Resource
          name="users"
          icon={UserIcon}
          list={UserList}
          show={UserShow}
          create={UserCreate}
          edit={UserEdit}
        />
      </Admin>
    </div>
  );
};

export default Dashboard;
