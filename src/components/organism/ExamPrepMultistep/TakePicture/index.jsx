import { useRef, useCallback } from "react";
import Webcam from "react-webcam";
import { WebcamPlaceholder } from "../../../../assets";
import "./TakePicture.scss";
import { Button, Divider } from "@mui/material";
import firebase from "@firebase/app-compat";
import { storage } from "../../../../providers-firebase";
import { ref, uploadString, getDownloadURL } from "@firebase/storage";

const TakePicture = ({ image, setImage, sessionId }) => {
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };
  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }, [webcamRef, setImage]);

  console.log(image);

  const updateSessionPicture = () => {
    const timestamp = new Date().getTime();
    let sessionRef = firebase.firestore().collection("/sessions");
    if (image == null) return;
    const storageRef = ref(storage, `images/image-${timestamp}`);
    uploadString(storageRef, image, "data_url").then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        sessionRef.doc(sessionId).update({
          user_pic: url,
        });
      });
    });
  };

  return (
    <div>
      <div className="examprep__steps__header">
        <h1>Take Your Photo</h1>
        <p>Make sure the photo cover all of your face</p>
      </div>
      <Divider variant="middle" flexItem />
      <div className="examprep__steps__content takepicture">
        <div className="takepicture__cams">
          <Webcam
            audio={false}
            height={250}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
          />

          {image == null ? (
            <img src={WebcamPlaceholder} alt="camera-icon" />
          ) : (
            <img src={image} alt="camera-icon" />
          )}
        </div>
        <div className="takepicture__button">
          <Button
            variant="contained"
            onClick={() => {
              capture();
              updateSessionPicture();
            }}
          >
            Take your photo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TakePicture;
