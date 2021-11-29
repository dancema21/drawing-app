import React from "react";

const CanvasActionsBar = React.forwardRef((props, ref) => {
  const handleClick = function(){
    const ctx = ref.current.getContext("2d");
    ctx.clearRect(0, 0, 100, 100);
  }
  
  return <div onClick={handleClick}>Clear</div>;
});

export default CanvasActionsBar;
