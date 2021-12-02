import React from "react";
import { BsFillEraserFill } from "react-icons/bs";
import { AiOutlineDownload } from "react-icons/ai";

const CanvasActionsBar = React.forwardRef((props, ref) => {
  const handleClick = function () {
    const ctx = ref.current.getContext("2d");
    const rect = ref.current.getBoundingClientRect();

    ctx.clearRect(0, 0, rect.width, rect.height);
  };

  let downloadLink;
  if (ref.current) {
    downloadLink = ref.current.toDataURL("image/png");
  }

  return (
    <div
      style={{
        position: "absolute",
        top: "85px",
        right: "10px",
        fontSize: "30px",
      }}
    >
      <div onClick={handleClick} style={{ cursor: "pointer" }}>
        <BsFillEraserFill />
      </div>
      <a href={downloadLink} download="my-drawing">
        <AiOutlineDownload />
      </a>
    </div>
  );
});

export default CanvasActionsBar;
