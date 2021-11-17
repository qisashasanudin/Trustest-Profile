import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Box,
  Grid,
  Divider,
} from "@mui/material";

import {
  DateRange as DateRangeIcon,
  Timer as TimerIcon,
  People as PeopleIcon,
  ListAlt as ListIcon,
} from "@mui/icons-material";

//TODO: Rapihin jadi gridview

const Preparation = ({ quiz }) => {
  let rules = [
    {
      icon: DateRangeIcon,
      primary: "Start Date",
      secondary: quiz.startDate.toString(),
    },
    {
      icon: DateRangeIcon,
      primary: "End date",
      secondary: quiz.endDate.toString(),
    },
    {
      icon: TimerIcon,
      primary: "Time Limit",
      secondary: quiz.timeLimit + " minutes",
    },
    {
      icon: ListIcon,
      primary: "Quiz",
      secondary: quiz.numOfQuestions + " questions",
    },
    {
      icon: PeopleIcon,
      primary: "Students",
      secondary: quiz.students + " enrolled",
    },
  ];

  return (
    <div>
      <div className="examprep__steps__header">
        <h1>{quiz.quizName}</h1>
        <p>{quiz.subjectName}</p>
      </div>
      <Divider variant="middle" flexItem />
      <div className="examprep__steps__content">
        <Box sx={{ flexGrow: 1, maxWidth: 600 }}>
          <Grid
            container
            spacing={1}
            justifyContent="space-between"
            columns={{ xs: 4, md: 6, lg: 12 }}
          >
            {Array.from(rules).map((element, index) => (
              <Grid item key={index}>
                <ListItem disablePadding>
                  <ListItemIcon>
                    <element.icon color="black" fontSize="large" />
                  </ListItemIcon>
                  <ListItemText
                    primary={element.primary}
                    secondary={element.secondary}
                  />
                </ListItem>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* {rules.map((element, index) => {
          return (
            <List disablePadding>
              <ListItem>
                <ListItemIcon>
                  <element.icon color="black" fontSize="large" />
                </ListItemIcon>
                <ListItemText
                  primary={element.primary}
                  secondary={element.secondary}
                />
              </ListItem>
            </List>
          );
        })} */}
      </div>
    </div>
  );
};

export default Preparation;
