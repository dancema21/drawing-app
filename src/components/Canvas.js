import { useLayoutEffect, useState, useRef } from "react";
import CanvasActionsBar from "./CanvasActionsBar";
import CustomCursor from "./CustomCursor";

const Canvas = (props) => {
  const canvasEl = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [position, setPosition] = useState(null);

  const size = parseInt(props.size, 10);
  const color = props.color;

  useLayoutEffect(() => {
    if (isDrawing && position) {
      const ctx = canvasEl.current.getContext("2d");
      ctx.beginPath();
      ctx.fillStyle = color;
      ctx.arc(position.x, position.y, size + 4, 0, Math.PI * 2);
      ctx.closePath();
      ctx.fill();
    }
  }, [position, isDrawing, color, size]);

  const handleMouseDown = function (e) {
    setIsDrawing(true);
    const rect = canvasEl.current.getBoundingClientRect();
    const x = e.clientX - rect.x;
    const y = e.clientY - rect.y;
    setPosition({ x: x, y: y });
  };

  const handleMouseUp = function () {
    setIsDrawing(false);
  };

  const handleMouseMove = function (e) {
    const rect = canvasEl.current.getBoundingClientRect();
    const x = e.clientX - rect.x;
    const y = e.clientY - rect.y;
    setPosition({ x: x, y: y });
  };

  return (
    <div>
      <canvas
        ref={canvasEl}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setPosition(null)}
        style={{ cursor: "none" }}
      ></canvas>
      {position && !isDrawing && (
        <CustomCursor
          ref={canvasEl}
          position={position}
          color={color}
          size={size}
        />
      )}
      <CanvasActionsBar ref={canvasEl} />
    </div>
  );
};

export default Canvas;
