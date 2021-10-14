import React from "react";
import { useHistory } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./examPreparation.scss";

import { Stepper, Step, StepLabel, Button } from "@mui/material";

import QontoConnector from "../../components/atoms/QontoConnector/QontoConnector";
import Preparation from "../../components/organism/ExamPrepMultistep/Preparation";
import Agreements from "../../components/organism/ExamPrepMultistep/Agreements";
import SystemCheck from "../../components/organism/ExamPrepMultistep/SystemCheck";
import TakePicture from "../../components/organism/ExamPrepMultistep/TakePicture";
import Rules from "../../components/organism/ExamPrepMultistep/Rules";

// =======================================================================================

const ExamPreparation = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [slideDir, setSlideDir] = React.useState("slideleft");
  const [agree, setAgree] = React.useState(false);
  const [micOn, setMicOn] = React.useState(false);
  const [camOn, setCamOn] = React.useState(false);
  const [speakerOn, setSpeakerOn] = React.useState(false);
  const [lightOn, setLightOn] = React.useState(false);

  const handleNext = () => {
    setSlideDir("slideleft");
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setSlideDir("slideright");
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  let history = useHistory();
  const routeToExamInProgress = () => {
    history.push("/exam_in_progress");
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
      content: (
        <Agreements
          subjectName={subjectName}
          quizName={quizName}
          agree={agree}
          setAgree={setAgree}
        />
      ),
    },
    {
      title: "System Check",
      content: (
        <SystemCheck
          micOn={micOn}
          setMicOn={setMicOn}
          camOn={camOn}
          setCamOn={setCamOn}
          speakerOn={speakerOn}
          setSpeakerOn={setSpeakerOn}
          lightOn={lightOn}
          setLightOn={setLightOn}
        />
      ),
    },
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
          {steps.map((element, index) => {
            const stepProps = {};
            const elementProps = {};

            return (
              <Step key={element.title} {...stepProps}>
                <StepLabel {...elementProps}>{element.title}</StepLabel>
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
          disabled={
            (activeStep === 1 && !agree) || (activeStep === 2 && !micOn)
            //TODO: ganti line di atas dengan: (activeStep === 2 && !(micOn && camOn && speakerOn && lightingOn))
          }
          onClick={() =>
            activeStep < steps.length - 1
              ? handleNext()
              : routeToExamInProgress()
          }
        >
          {activeStep === steps.length - 1 ? "Start Attempt" : "Next"}
        </Button>
      </div>
    </div>
  );
};

export default ExamPreparation;
