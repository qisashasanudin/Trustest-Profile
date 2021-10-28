import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@mui/material";

import {
  CheckCircleOutline as CheckIcon,
  DoNotDisturb as DoNotIcon,
} from "@mui/icons-material";

import "./Rules.scss";

const Rules = ({ subjectName, quizName }) => {
  let rules = [
    { action: "Open Notebook", isAllowed: true },
    { action: "Use Calculator", isAllowed: true },
    { action: "Write on the scrap paper", isAllowed: true },
    { action: "Communicate with other examinees", isAllowed: false },
    { action: "Copy from other examinees", isAllowed: false },
    { action: "Search the internet for answers", isAllowed: false },
  ];

  return (
    <div>
      <div className="examprep__steps__header">
        <h1>Exam Rules</h1>
        <p>{subjectName}</p>
        <p>{quizName}</p>
      </div>
      <div className="examprep__steps__content">
        <div className="container">
          <div className="column">
            <div>You are allowed to: </div>
            {rules.map((element, index) => {
              return element.isAllowed ? (
                <List>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <CheckIcon color="black" fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary={element.action} />
                  </ListItem>
                </List>
              ) : (
                ""
              );
            })}
          </div>
          <Divider orientation="vertical" variant="middle" flexItem />
          <div className="column">
            <div>You are not allowed to: </div>
            {rules.map((element, index) => {
              return !element.isAllowed ? (
                <List>
                  <ListItem disablePadding>
                    <ListItemIcon>
                      <DoNotIcon color="black" fontSize="large" />
                    </ListItemIcon>
                    <ListItemText primary={element.action} />
                  </ListItem>
                </List>
              ) : (
                ""
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rules;
