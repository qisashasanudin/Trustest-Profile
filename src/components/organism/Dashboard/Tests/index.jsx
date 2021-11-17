import React from "react";
import {
  Dialog,
  DialogContent,
  Box,
  Grid,
  Card,
  CardActionArea,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ExamPreparation from "../../../../pages/examPreparation";
import Summary from "../../ExamPrepMultistep/Summary";
import "./Tests.scss";

const Tests = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedQuiz, setSelectedQuiz] = React.useState(null);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let quizes = [
    {
      subjectName: "Pemrosesan Sinyal Multimedia-01 (2021)",
      quizName: "Kuis 1",
      startDate: new Date("November 8, 2021 13:00:00"),
      endDate: new Date("November 8, 2021 15:00:00"),
      timeLimit: 30,
      students: 245,
      numOfQuestions: 25,
      rules: [
        { action: "Open Notebook", isAllowed: true },
        { action: "Use Calculator", isAllowed: true },
        { action: "Write on the scrap paper", isAllowed: true },
        { action: "Communicate with other examinees", isAllowed: false },
        { action: "Copy from other examinees", isAllowed: false },
        { action: "Search the internet for answers", isAllowed: false },
      ],
    },
    {
      subjectName: "Pemrograman Berbasis Objek-01 (2021)",
      quizName: "UTS",
      startDate: new Date("November 9, 2021 13:00:00"),
      endDate: new Date("November 9, 2021 15:00:00"),
      timeLimit: 180,
      students: 150,
      numOfQuestions: 10,
      rules: [
        { action: "Open Notebook", isAllowed: true },
        { action: "Use Calculator", isAllowed: true },
        { action: "Write on the scrap paper", isAllowed: true },
        { action: "Communicate with other examinees", isAllowed: false },
        { action: "Copy from other examinees", isAllowed: false },
        { action: "Search the internet for answers", isAllowed: false },
      ],
    },
  ];

  return (
    <div className="quiz-container">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          {Array.from(quizes).map((quiz, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card sx={{ maxWidth: 600, borderRadius: 5, boxShadow: 5 }}>
                <CardActionArea
                  onClick={() => {
                    setSelectedQuiz(quiz);
                    handleClickOpen();
                  }}
                >
                  <Summary quiz={quiz} />
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Dialog
        scroll={"body"}
        maxWidth={"lg"}
        fullWidth={true}
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
      >
        <DialogContent sx={{ textAlign: "center", overflow: "hidden" }}>
          <ExamPreparation quiz={selectedQuiz} onClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default Tests;
