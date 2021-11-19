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

const Rules = ({ quiz }) => {
  const rules = [
    { action: "Open Notebook", isAllowed: quiz.rules.openBook },
    { action: "Use Calculator", isAllowed: quiz.rules.useCalculator },
    { action: "Write on the scrap paper", isAllowed: quiz.rules.scrapPaper },
    {
      action: "Communicate with other examinees",
      isAllowed: quiz.rules.teamwork,
    },
    { action: "Copy from other examinees", isAllowed: quiz.rules.plagiarism },
    {
      action: "Search the internet for answers",
      isAllowed: quiz.rules.searchInternet,
    },
  ];

  return (
    <div>
      <div className="examprep__steps__header">
        <h1>Exam Rules</h1>
        <p>{quiz.subjectName}</p>
        <p>{quiz.quizName}</p>
      </div>
      <Divider variant="middle" flexItem />
      <div className="examprep__steps__content">
        <div className="container">
          <div className="column">
            <div>You are allowed to: </div>
            {rules.map((element, index) => {
              return element.isAllowed ? (
                <List disablePadding>
                  <ListItem>
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
          <Divider variant="middle" flexItem />
          <div className="column">
            <div>You are not allowed to: </div>
            {rules.map((element, index) => {
              return !element.isAllowed ? (
                <List disablePadding>
                  <ListItem>
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
