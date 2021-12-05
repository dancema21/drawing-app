import { useState } from "react";

import Canvas from "./Canvas";
import ParametersBar from "./ParametersBar";

const ChangeableCanvas = () => {
  const [size, setSize] = useState("23");
  const [color, setColor] = useState("black");

  return (
    <div style={{ display: "flex" }}>
      <ParametersBar setSize={setSize} setColor={setColor} />
      <Canvas size={size} color={color} />
    </div>
  );
};

export default ChangeableCanvas;
