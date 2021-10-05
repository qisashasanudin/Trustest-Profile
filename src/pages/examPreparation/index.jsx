import React from "react";
import "./examPreparation.scss";

import { Stepper, Step, StepLabel, Button, Box } from "@mui/material";

import QontoConnector from "../../components/atoms/QontoConnector/QontoConnector";
import Preparation from "../../components/organism/exam_prep_multistep/Preparationn";

// =======================================================================================

let subjectName = "Pemrosesan Sinyal Multimedia-01 (2021)";
let quizName = "Kuis 1";
const steps = [
  "Exam Preparation",
  "Agreement",
  "System Check",
  "Take Your Photo",
  "Exam Rules",
];

const ExamPrep = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="examprep">
      <div className="examprep__navbar_margin"></div>

      <div className="examprep__stepper">
        <Stepper
          activeStep={activeStep}
          alternativeLabel
          connector={<QontoConnector />}
        >
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>

      <div className="examprep__header">
        <h1>{steps[activeStep]}</h1>
        <p>{subjectName}</p>
        <p>{quizName}</p>
      </div>

      <div className="examprep__content">
        <Preparation />
      </div>

      <div className="examprep__nav_buttons">
        <Button
          variant="outlined"
          size="large"
          disabled={activeStep <= 0}
          onClick={handleBack}
        >
          Back
        </Button>
        <Box sx={{ flex: "0.025 1 auto" }} />
        <Button
          variant="contained"
          size="large"
          onClick={() => (activeStep < steps.length - 1 ? handleNext() : null)}
          //TODO: null diganti jadi routing buat ke page kuis
        >
          {activeStep === steps.length - 1 ? "Start Attempt" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default ExamPrep;
