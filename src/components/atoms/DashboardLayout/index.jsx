// import * as React from "react";
import { useSelector } from "react-redux";
import { Layout } from "react-admin";
import DashboardNavBar from "../../organism/DashboardNavBar";
import { darkTheme, lightTheme } from "../DashboardThemes";

const DashboardLayout = (props) => {
  const theme = useSelector((state) =>
    state.theme === "dark" ? darkTheme : lightTheme
  );
  return <Layout {...props} appBar={DashboardNavBar} theme={theme} />;
};

export default DashboardLayout;
