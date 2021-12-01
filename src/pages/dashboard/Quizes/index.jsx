import { useState, useEffect } from "react";
import { db, auth } from "../../../providers-firebase";
import { collection, onSnapshot, doc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import firebase from "@firebase/app-compat";
import {
  Dialog,
  Modal,
  DialogContent,
  Box,
  Grid,
  Card,
  CardActionArea,
  Typography,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ExamPreparation from "../../examPreparation";
import Summary from "../../../components/organism/ExamPrepMultistep/Summary";
import "./Quizes.scss";

const Quizes = () => {
  const [quizes, setQuizes] = useState([]);
  const [userData, setUserData] = useState();
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [sessionId, setSessionId] = useState(null);
  const [openPrepDialog, setOpenPrepDialog] = useState(false);
  const [openNoAccessModal, setOpenNoAccessModal] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(
    () =>
      onSnapshot(collection(db, "quizes"), (snapshot) => {
        setQuizes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      }),

    []
  );
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        onSnapshot(doc(db, "users", user.uid), (doc) => {
          setUserData({ ...doc.data(), id: user.uid });
        });
      }
    });
  }, []);

  const handleCreateSession = async (quizId) => {
    let sessionRef = firebase.firestore().collection("/sessions");
    const newSession = await sessionRef.add({
      logs: [],
      quiz: doc(db, "quizes/" + quizId),
      user: doc(db, "users/" + userData.id),
      user_pic: "",
    });
    setSessionId(newSession.id);
  };

  const handleClickOpen = (quiz) => {
    quiz.students && quiz.students.includes(userData.npm)
      ? setOpenPrepDialog(true)
      : setOpenNoAccessModal(true);
  };

  const handleClose = () => {
    setOpenPrepDialog(false);
    setOpenNoAccessModal(false);
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
                    handleClickOpen(quiz);
                    handleCreateSession(quiz.id);
                  }}
                >
                  <Summary quiz={quiz} />
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Modal
        open={openNoAccessModal}
        onClose={handleClose}
        onBackdropClick={() => setOpenNoAccessModal(true)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "#fff",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Access Unavailable
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Your student ID (NPM) is not registered in this quiz.
          </Typography>
        </Box>
      </Modal>

      <Dialog
        scroll={"body"}
        maxWidth={"lg"}
        fullWidth={true}
        fullScreen={fullScreen}
        open={openPrepDialog}
        onClose={(handleClose, "backdropClick")}
      >
        <DialogContent sx={{ textAlign: "center", overflow: "hidden" }}>
          <ExamPreparation
            quiz={selectedQuiz}
            onClose={handleClose}
            sessionId={sessionId}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default Quizes;
