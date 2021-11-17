import React from "react";
import { useHistory } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./examPreparation.scss";

import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Stack,
  useMediaQuery,
} from "@mui/material";

import QontoConnector from "../../components/atoms/QontoConnector/QontoConnector";
import Summary from "../../components/organism/ExamPrepMultistep/Summary";
import Preparation from "../../components/organism/ExamPrepMultistep/Preparation";
import Agreements from "../../components/organism/ExamPrepMultistep/Agreements";
import SystemCheck from "../../components/organism/ExamPrepMultistep/SystemCheck";
import TakePicture from "../../components/organism/ExamPrepMultistep/TakePicture";
import Rules from "../../components/organism/ExamPrepMultistep/Rules";

// =======================================================================================

const ExamPreparation = ({ quiz, onClose }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [slideDir, setSlideDir] = React.useState("slideleft");
  const [agree, setAgree] = React.useState(false);
  const [micOn, setMicOn] = React.useState(false);
  const [camOn, setCamOn] = React.useState(false);
  const [speakerOn, setSpeakerOn] = React.useState(false);
  const [lightOn, setLightOn] = React.useState(false);
  const [image, setImage] = React.useState(null);
  const mobileLayout = useMediaQuery("(max-width:900px)");

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
    history.push("/exam_in_progress/");
  };

  const steps = [
    {
      title: "Summary",
      content: <Summary quiz={quiz} />,
    },
    {
      title: "Exam Preparation",
      content: <Preparation quiz={quiz} />,
    },
    {
      title: "Agreements",
      content: <Agreements quiz={quiz} agree={agree} setAgree={setAgree} />,
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
    {
      title: "Take Your Photo",
      content: <TakePicture image={image} setImage={setImage} />,
    },
    {
      title: "Exam Rules",
      content: <Rules quiz={quiz} />,
    },
  ];

  return (
    <div className="examprep">
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
                <StepLabel {...elementProps}>
                  {!mobileLayout ? element.title : ""}
                </StepLabel>
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
        <Stack spacing={2} direction="row">
          <Button
            variant="outlined"
            onClick={activeStep <= 0 ? onClose : handleBack}
          >
            Back
          </Button>
          <Button
            variant="contained"
            disabled={
              (activeStep === 2 && !agree) ||
              (activeStep === 3 && !(micOn && camOn)) ||
              //TODO: ganti line di atas dengan: (activeStep === 3 && !(micOn && camOn && speakerOn && lightingOn))
              (activeStep === 4 && !image)
            }
            onClick={() =>
              activeStep < steps.length - 1
                ? handleNext()
                : routeToExamInProgress()
            }
          >
            {activeStep === steps.length - 1 ? "Start Attempt" : "Next"}
          </Button>
        </Stack>
      </div>
    </div>
  );
};

export default ExamPreparation;
