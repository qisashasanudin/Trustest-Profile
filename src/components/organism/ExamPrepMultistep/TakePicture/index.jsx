import React, { useRef, useCallback } from "react";
import { useState } from "react";
import Webcam from "react-webcam";
import { WebcamPlaceholder } from "../../../../assets";
import "./TakePicture.scss";

const TakePicture = () => {
  const [image, setImage] = useState(null);
  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };
  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  }, [webcamRef]);

  return (
    <div>
      {" "}
      <div className="examprep__steps__header">
        <h1>Take Your Photo</h1>
        <p>Make sure the photo cover all of your face</p>
      </div>
      <div className="examprep__steps__content takepicture">
        <div className="takepicture__cams">
          <Webcam
            audio={false}
            height={270}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={480}
            videoConstraints={videoConstraints}
          />
          {image == null ? (
            <img src={WebcamPlaceholder} alt="camera-icon" />
          ) : (
            <img src={image} alt="camera-icon" />
          )}
        </div>
        <button onClick={capture}>Take your photo</button>
      </div>
    </div>
  );
};

export default TakePicture;
