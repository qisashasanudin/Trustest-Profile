import { useContext, useEffect, useRef, useState } from "react";
import { sessionContext } from "../../context";
import "./examInProgress.scss";
import { db } from "../../providers-firebase";
import { updateDoc, doc, getDoc } from "@firebase/firestore";
import { useHistory } from "react-router-dom";

export default function ExamInProgress() {
  const [log, setLog] = useState([]);
  const [status, setStatus] = useState(true);
  const [quizData, setQuizData] = useState({});
  const { session } = useContext(sessionContext);
  const [seconds, setSeconds] = useState(99);
  const [minutes, setMinutes] = useState(99);
  const [hours, setHours] = useState(99);
  const [days, setDays] = useState(99);
  const history = useHistory();
  const webgazer = window.webgazer;
  const beginExam = () => {
    webgazer
      .setGazeListener((data, clock) => {
        if (data === null) {
          setStatus(false);
        } else {
          setStatus(true);
        }
      })
      .begin();
  };

  function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }
  const prevStatus = usePrevious(status);

  useEffect(() => {
    if (status !== prevStatus) {
      const timestamp = new Date().getTime();
      setLog((prevLog) => [
        ...prevLog,
        { activity: "Student goes out of frame", timestamp: timestamp },
      ]);
    }
  }, [status, prevStatus]);

  useEffect(() => {
    let sessionRef = doc(db, "sessions", session);
    const fetchSession = async () => {
      const sessionRes = await getDoc(sessionRef);
      const sessionData = sessionRes.data();
      const quizRes = await getDoc(sessionData.quiz);
      const quiz = quizRes.data();
      setQuizData({
        quizTime: quiz.endDate.seconds * 1000,
      });
    };
    fetchSession();
  }, [session]);

  var countDownDate = quizData.quizTime;
  useEffect(() => {
    const interval = setInterval(() => {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      if (distance >= 0) {
        setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
        setHours(
          Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        );
        setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((distance % (1000 * 60)) / 1000));
      } else {
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [countDownDate, quizData]);

  const endExam = async () => {
    webgazer.pause();
    let sessionRef = doc(db, "sessions", session);
    const response = await updateDoc(sessionRef, {
      logs: log,
    });

    return response;
  };
  return (
    <>
      <div className="progressExam">
        <div className="progressExam__countdown">
          <div className="progressExam__countdown__clock">
            <h1>{days <= 9 ? `0${days}` : days}</h1>
            <h6 className="nopad">Hari</h6>
          </div>
          <h1>:</h1>
          <div className="progressExam__countdown__clock">
            <h1>{hours <= 9 ? `0${hours}` : hours}</h1>
            <h6 className="nopad">Jam</h6>
          </div>
          <h1>:</h1>
          <div className="progressExam__countdown__clock">
            <h1>{minutes <= 9 ? `0${minutes}` : minutes}</h1>
            <h6 className="nopad">Menit</h6>
          </div>
          <h1>:</h1>
          <div className="progressExam__countdown__clock">
            <h1>{seconds <= 9 ? `0${seconds}` : seconds}</h1>
            <h6 className="nopad">Detik</h6>
          </div>
        </div>
        <div className="progressExam__buttons">
          <button
            onClick={() => {
              beginExam();
            }}
          >
            Begin
          </button>
          <button
            onClick={() => {
              endExam();
              history.push("/");
            }}
          >
            Finish Attempt
          </button>
        </div>
      </div>
    </>
  );
}
