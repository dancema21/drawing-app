import React from "react";

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
    <div>
      <div onClick={handleClick}>Clear</div>
      <a href={downloadLink} download="my-drawing">
        Download
      </a>
    </div>
  );
});

export default CanvasActionsBar;
