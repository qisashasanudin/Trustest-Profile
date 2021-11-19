import React from "react";
import { useGetList, Loading, Error } from "react-admin";

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
import ExamPreparation from "../../examPreparation";
import Summary from "../../../components/organism/ExamPrepMultistep/Summary";
import "./Quizes.scss";

const Quizes = () => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [selectedQuiz, setSelectedQuiz] = React.useState(null);

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const { data, ids, loading, error } = useGetList(
    "quizes",
    { page: 1, perPage: 1000 },
    { field: "subjectName", order: "DESC" }
    // { numOfQuestions: 25 } //filter
  );
  if (loading) return <Loading />;
  if (error) return <Error />;
  const quizList = data;
  const quizIds = ids;

  return (
    <div className="quiz-container">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          {quizIds.map((quizId) => (
            <Grid item xs={12} md={6} lg={4} key={quizId}>
              <Card sx={{ maxWidth: 600, borderRadius: 5, boxShadow: 5 }}>
                <CardActionArea
                  onClick={() => {
                    setSelectedQuiz(quizList[quizId]);
                    handleClickOpen();
                  }}
                >
                  <Summary quiz={quizList[quizId]} />
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
        open={openDialog}
        onClose={handleClose}
      >
        <DialogContent sx={{ textAlign: "center", overflow: "hidden" }}>
          <ExamPreparation quiz={selectedQuiz} onClose={handleClose} />
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default Quizes;
