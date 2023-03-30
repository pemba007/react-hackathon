import React, { useContext } from "react";
import TestContext from "../context/testContext";

const Test = () => {
  const val = useContext(TestContext);
  console.log("VAl", val);
  return <h2>Test</h2>;
};

export default Test;
