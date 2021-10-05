import React from "react";

// import { DiamondLogo, FreeLogo } from "../../assets";
import "./examPreparation.scss";

import { List, ListItem, ListItemText, ListItemAvatar } from "@mui/material";
import {
  Wifi as WifiIcon,
  WbIncandescent as LampIcon,
  NotificationsOff as MuteIcon,
} from "@mui/icons-material";

import Button from "@mui/material/Button";

let PageTitle = "Exam Preparation";
let SubjectName = "Pemrosesan Sinyal Multimedia-01 (2021)";

const ExamPrep = () => {
  return (
    <div className="examprep">
      <div className="examprep__header">
        <h1>{PageTitle}</h1>
        <p>{SubjectName}</p>
      </div>

      <div className="examprep__listitems">
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

      <div className="examprep__nextbutton">
        <Button variant="contained" size="large">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default ExamPrep;
