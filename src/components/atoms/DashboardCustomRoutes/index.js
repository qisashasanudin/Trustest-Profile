// in src/customRoutes.js
import * as React from "react";
import { Route } from "react-router-dom";
import ExamInProgress from "../../../pages/examInProgress";

const CustomRoutes = [
  <Route exact path="/exam_in_progress/" component={ExamInProgress} />,
];

export default CustomRoutes;
