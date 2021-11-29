import React from "react";

const CanvasActionsBar = React.forwardRef((props, ref) => {
  const handleClick = function(){
    const ctx = ref.current.getContext("2d");
    const rect = ref.current.getBoundingClientRect();

    ctx.clearRect(0, 0, rect.width, rect.height);
  }
  
  return <div onClick={handleClick}>Clear</div>;
});

export default CanvasActionsBar;
