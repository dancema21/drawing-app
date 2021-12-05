import { useState, useRef, useEffect } from "react";
import CanvasActionsBar from "./CanvasActionsBar";
import CustomCursor from "./CustomCursor";

const Canvas = (props) => {
  const canvasEl = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [position, setPosition] = useState(null);

  const size = parseInt(props.size, 10);
  const color = props.color;

  useEffect(() => {
    const canvas = canvasEl.current
    if (canvas) {
        const width = window.innerWidth - 110;
        const heigth = window.innerHeight - 73
        canvas.width = width;
        canvas.height = heigth;

        const ctx = canvasEl.current.getContext('2d');
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }, [])

  const drawLine = (x,y) => {
    if (isDrawing && position) {
      const ctx = canvasEl.current.getContext("2d");
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = size;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.moveTo(position.x, position.y);
      ctx.lineTo(x,y);
      ctx.stroke();
      ctx.closePath();
    } 
  }


  const handleMouseDown = function (e) {
    setIsDrawing(true);
    const newPositionX = e.nativeEvent.offsetX;
    const newPositionY = e.nativeEvent.offsetY;
    setPosition({ x: newPositionX, y: newPositionY });
  };

  const handleMouseUp = function () {
    setIsDrawing(false);
  };

  const handleMouseMove = function (e) {
    const newPositionX = e.nativeEvent.offsetX;
    const newPositionY = e.nativeEvent.offsetY;
    drawLine(newPositionX, newPositionY);
    setPosition({x: newPositionX, y: newPositionY});
  };

  const handleMouseLeave = () => {
    setPosition(null);
  }

  return (
    <div style={{position: "relative"}}>
      <canvas
        ref={canvasEl}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{cursor: "none"}}
      ></canvas>
      {position && !isDrawing && (
        <CustomCursor
          color={color}
          size={size}
          position={position}
        />
      )}
      <CanvasActionsBar ref={canvasEl} />
    </div>
  );
};

export default Canvas;
