import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";

import Overview from "../../components/organism/Dashboard/Overview";
import Tests from "../../components/organism/Dashboard/Tests";
import MyResults from "../../components/organism/Dashboard/MyResults";

import PostList from "../../components/organism/Dashboard/Posts/PostList";
import PostCreate from "../../components/organism/Dashboard/Posts/PostCreate";
import PostEdit from "../../components/organism/Dashboard/Posts/PostEdit";

import UserList from "../../components/organism/Dashboard/Users/UserList";
import UserCreate from "../../components/organism/Dashboard/Users/UserCreate";
import UserEdit from "../../components/organism/Dashboard/Users/UserEdit";

import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div>
      <Admin dataProvider={restProvider("http://localhost:3000")}>
        <Resource name="overview" list={Overview} />
        <Resource name="tests" list={Tests} />
        <Resource name="my results" list={MyResults} />
        <Resource
          name="posts"
          list={PostList}
          create={PostCreate}
          edit={PostEdit}
        />
        <Resource
          name="users"
          list={UserList}
          create={UserCreate}
          edit={UserEdit}
        />
      </Admin>
    </div>
  );
};

export default Dashboard;
