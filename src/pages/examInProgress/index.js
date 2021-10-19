import React, { useRef } from "react";
import "./styles.css";

var elem = document.documentElement;
export default function App() {
  const videoRef = useRef();
  const buttonRef = useRef();
  const goFullScreen = () => {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen();
    }
  };
  const closeScreen = async () => {
    if (!document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen();
    }
  };

  //share content
  const shareScreenMedia = async () => {
    try {
      await navigator.share({ title: "Example Page", url: "" });
    } catch (e) {
      console.log(e.message);
    }
  };

  const pipMode = () => {
    const pipButton = buttonRef.current;
    const video = videoRef.current;
    // Hide button if Picture-in-Picture is not supported.
    pipButton.hidden = !document.pictureInPictureEnabled;
    if (!document.pictureInPictureElement) {
      video.requestPictureInPicture().catch((error) => {
        // Video failed to enter Picture-in-Picture mode.
        console.log(error.message);
      });
    } else {
      document.exitPictureInPicture().catch((error) => {
        // Video failed to leave Picture-in-Picture mode.
        console.log(error.message);
      });
    }
  };
  return (
    <>
      <div className="app">
        <video className="app__video" ref={videoRef} controls>
          <source
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
        </video>
        <button onClick={goFullScreen}>FullScreen</button>
        <button onClick={closeScreen}>CloseScreen</button>
        <button onClick={shareScreenMedia}>ShareContent</button>
        <button ref={buttonRef} onClick={pipMode}>
          PictureInPictureMode
        </button>
      </div>
    </>
  );
}
