import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./examPreparation.scss";

import { Stepper, Step, StepLabel, Button } from "@mui/material";

import QontoConnector from "../../components/atoms/QontoConnector/QontoConnector";
import Preparation from "../../components/organism/exam_prep_multistep/Preparation";
import Agreements from "../../components/organism/exam_prep_multistep/Agreements";
import SystemCheck from "../../components/organism/exam_prep_multistep/SystemCheck";
import TakePicture from "../../components/organism/exam_prep_multistep/TakePicture";
import Rules from "../../components/organism/exam_prep_multistep/Rules";

// =======================================================================================

const ExamPreparation = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [slideDir, setSlideDir] = React.useState("slideleft");
  const [agree, setAgree] = React.useState(false);

  const handleNext = () => {
    setSlideDir("slideleft");
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setSlideDir("slideright");
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  let subjectName = "Pemrosesan Sinyal Multimedia-01 (2021)";
  let quizName = "Kuis 1";

  const steps = [
    {
      title: "Exam Preparation",
      content: <Preparation subjectName={subjectName} quizName={quizName} />,
    },
    {
      title: "Agreements",
      content: <Agreements agree={agree} setAgree={setAgree} />,
    },
    { title: "System Check", content: <SystemCheck /> },
    { title: "Take Your Photo", content: <TakePicture /> },
    {
      title: "Exam Rules",
      content: <Rules subjectName={subjectName} quizName={quizName} />,
    },
  ];

  return (
    <div className="examprep">
      <div className="examprep__navbar_margin"></div>

      <div className="examprep__stepper">
        <Stepper
          activeStep={activeStep}
          connector={<QontoConnector />}
          alternativeLabel
        >
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};

            return (
              <Step key={label.title} {...stepProps}>
                <StepLabel {...labelProps}>{label.title}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>

      <div className="examprep__steps">
        <SwitchTransition mode="out-in">
          <CSSTransition
            in={true}
            appear={true}
            key={activeStep}
            classNames={slideDir}
            timeout={300}
          >
            <div>{steps[activeStep].content}</div>
          </CSSTransition>
        </SwitchTransition>
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
        <Button
          variant="contained"
          size="large"
          disabled={activeStep === 1 && agree === false}
          onClick={() => (activeStep < steps.length - 1 ? handleNext() : null)}
          //TODO: null harus diganti jadi routing buat ke page kuis
        >
          {activeStep === steps.length - 1 ? "Start Attempt" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default ExamPreparation;
