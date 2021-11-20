import React, { useState, useEffect } from "react";
import { db } from "../../../providers-firebase";
import { collection, onSnapshot } from "firebase/firestore";

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
  const [quizes, setQuizes] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);

  const [openDialog, setOpenDialog] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(
    () =>
      onSnapshot(collection(db, "quizes"), (snapshot) => {
        setQuizes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }),

    []
  );

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <div className="quiz-container">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          {quizes.map((quiz) => (
            <Grid item xs={12} md={6} lg={4} key={quiz.id}>
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
