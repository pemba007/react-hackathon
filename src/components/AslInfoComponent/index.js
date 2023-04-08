import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import asl from "../../asl.png";

const AslInfoComponent = ({ closeModal }) => {
  const style = {
    display: "grid",
    placeItems: "center",
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "grid",
        placeIems: "center",
        // backgroundColor: "gray",
        // opacity: 0.8,
      }}
      onClick={() => closeModal()}
    >
      <Box sx={style}>
        <div>
          <Typography id='modal-modal-title' variant='h6' component='h2'>
            Standard American Sign Language
          </Typography>
          <img src={asl} />
        </div>
      </Box>
    </div>
  );
};

export default AslInfoComponent;
