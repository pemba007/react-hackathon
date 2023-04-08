import Grid from "@mui/material/Grid";
import CaptureVideoComponent from "../CaptureVideoComponent";
import DetectedTextComponent from "../DetectedTextComponent";

// const Item = () => {
//   return <p style={{ backgroundColor: "red" }}>Bklue</p>;
// };

const VideoComponent = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={6} mid={6}>
        <CaptureVideoComponent />
      </Grid>
      <Grid item xs={6} md={6}>
        <DetectedTextComponent />
      </Grid>
    </Grid>
  );
};

export default VideoComponent;
