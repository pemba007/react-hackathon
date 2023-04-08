import Typography from "@mui/material/Typography";
import { useEffect } from "react";

const DetectedTextComponent = ({ text = "" }) => {
  const _renderTextComponent = () => {
    if (text == "") {
      return "This is where your text prompt will be generated";
    } else {
      return text;
    }
  };

  useEffect(() => {}, [text]);

  return (
    <div>
      <Typography variant='h2' gutterBottom>
        Detected Text
      </Typography>

      <Typography
        variant='body1'
        gutterBottom
        style={{
          background: "#eee",
          maxWidth: "80%",
          padding: "10px 20px",
          color: "#1769aa",
          borderRadius: "5px",
        }}
      >
        {_renderTextComponent()}
      </Typography>
    </div>
  );
};

export default DetectedTextComponent;
