import { useCallback, useEffect, useRef } from "react";
import Webcam from "react-webcam";
const CaptureVideoComponent = () => {
  // Component for Video Rendering

  const webcamRef = useRef(null);

  useEffect(() => {
    var intervalId = window.setInterval(function () {
      if (webcamRef) {
        _captureImage();
      }
    }, 2000);
  }, []);

  const _captureImage = useCallback(() => {
    if (webcamRef != null) {
      const imageSrc = webcamRef.current.getScreenshot();
      // console.log("Without button", imageSrc);
    }
  }, [webcamRef]);

  const videoConstraints = {
    width: 700,
    height: 720,
    facingMode: "user",
  };

  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <Webcam
        ref={webcamRef}
        imageSmoothing
        mirrored
        audio={false}
        height={720}
        screenshotFormat='image/jpeg'
        // width={700}
        videoConstraints={videoConstraints}
        // width={500}
      />
    </div>
  );
};

export default CaptureVideoComponent;
