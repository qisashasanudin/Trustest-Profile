import React from "react";
import "./examPreparation.scss";

// imports from material UI
import {
  Stepper,
  Step,
  StepLabel,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Button,
} from "@mui/material";

import {
  Wifi as WifiIcon,
  WbIncandescent as LampIcon,
  NotificationsOff as MuteIcon,
} from "@mui/icons-material";

let SubjectName = "Pemrosesan Sinyal Multimedia-01 (2021)";

const ExamPrep = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className="examprep">
      <div className="examprep__navbar_margin"></div>

      <div className="examprep__stepper">
        <Stepper activeStep={activeStep} alternativeLabel>
          <Step>
            <StepLabel>Exam Preparation</StepLabel>
          </Step>
          <Step>
            <StepLabel>Agreement</StepLabel>
          </Step>
          <Step>
            <StepLabel>System Check</StepLabel>
          </Step>
          <Step>
            <StepLabel>Take Your Photo</StepLabel>
          </Step>
          <Step>
            <StepLabel>Exam Rules</StepLabel>
          </Step>
        </Stepper>
      </div>

      <div className="examprep__header">
        <h1>Exam Preparation</h1>
        <p>{SubjectName}</p>
      </div>

      <div className="examprep__list_items">
        <List sx={{ width: "100%" }}>
          <ListItem>
            <ListItemAvatar>
              <WifiIcon color="black" fontSize="large" />
            </ListItemAvatar>
            <ListItemText
              primary="Stable Internet Connection"
              secondary="Please ensure you have a stable internet connection."
            />
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <LampIcon color="black" fontSize="large" />
            </ListItemAvatar>
            <ListItemText
              primary="Good Lighting"
              secondary="Please ensure your room has good lighting."
            />
          </ListItem>

          <ListItem>
            <ListItemAvatar>
              <MuteIcon color="black" fontSize="large" />
            </ListItemAvatar>
            <ListItemText
              primary="Keep Silent and Don’t be Interrupted"
              secondary="Please keep silent and make sure you are not interrupted during the test, as the timer cannot be paused once started."
            />
          </ListItem>
        </List>
      </div>

      <div className="examprep__nav_buttons">
        <Button
          variant="contained"
          size="large"
          disabled={activeStep <= 0}
          onClick={() => handleBack()}
        >
          Back
        </Button>
        <Button variant="contained" size="large" onClick={() => handleNext()}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default ExamPrep;
