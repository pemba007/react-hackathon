import Fab from "@mui/material/Fab";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import AslInfoComponent from "../components/AslInfoComponent";
import VideoComponent from "../components/VideoComponent";
// import

const Root = () => {
  // const [showModal, setShowModal] = useState(false);
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      <div>
        <Typography variant='h1' gutterBottom align='center'>
          Unmutify
        </Typography>
      </div>
      <VideoComponent></VideoComponent>
      <Fab
        variant='extended'
        color='primary'
        aria-label='add'
        onClick={() => {
          // console.log("Its clickinggggg");
          setShowModal(true);
        }}
        style={{
          align: "center",
        }}
      >
        Click to know ASL
      </Fab>
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        // aria-labelledby='modal-modal-title'
        // aria-describedby='modal-modal-description'
      >
        <AslInfoComponent closeModal={() => setShowModal(false)} />
      </Modal>
    </>
  );
};

// const AslInfoComponent = () => {
//   const style = {
//     display: "grid",
//     placeItems: "center",
//     maxWidth: "80%",
//     maxHeight: "80%",
//   };

//   return (
//     <div style={{ width: "100%", height: "100%" }}>
//       <Box sx={style}>
//         <Typography id='modal-modal-title' variant='h6' component='h2'>
//           Standard American Sign Language
//         </Typography>
//         <img src={asl} />
//       </Box>
//     </div>
//   );
// };

export default Root;
