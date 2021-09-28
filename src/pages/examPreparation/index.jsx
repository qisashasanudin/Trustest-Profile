import React from "react";

import { DiamondLogo, FreeLogo } from "../../assets";
import "./examPreparation.scss";
import { Button } from "../../components/atoms";

const ExamPrep = () => {
  return (
    <div className="examprep">
      <h1>Exam Preparation</h1>
      <Button
        buttonColor="primary"
        buttonStyle="semi-rounded"
        buttonSize="large"
        // onClick={routeToExamPrep}
      >
        Start Attempt
      </Button>
    </div>
  );
};

export default ExamPrep;
