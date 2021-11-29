import { useState } from "react";

import Canvas from "./Canvas";
import ParametersBar from "./ParametersBar";

const ChangeableCanvas = () => {
  const [size, setSize] = useState("1");

  return (
    <div>
      <ParametersBar setSize={setSize} />
      <Canvas size={size} />
    </div>
  );
};

export default ChangeableCanvas;
