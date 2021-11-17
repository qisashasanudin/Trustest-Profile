// import * as React from "react";
import { useSelector } from "react-redux";
import { Layout, LayoutProps } from "react-admin";
import AppBar from "./AppBar";
import { darkTheme, lightTheme } from "./themes";
import { AppState } from "./types";

const DashboardLayout = (props: LayoutProps) => {
  const theme = useSelector((state: AppState) =>
    state.theme === "dark" ? darkTheme : lightTheme
  );
  return <Layout {...props} appBar={AppBar} theme={theme} />;
};

export default DashboardLayout;
