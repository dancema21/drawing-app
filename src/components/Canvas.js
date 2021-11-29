import { useLayoutEffect, useState, useRef, useCallback } from "react";
import CanvasActionsBar from "./CanvasActionsBar";

const Canvas = (props) => {
  const canvasEl = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [positions, setPositions] = useState([]);

  const size = props.size;

  const drawLine = useCallback(() => {
    const ctx = canvasEl.current.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = size;
    ctx.moveTo(
      positions[positions.length - 2].x,
      positions[positions.length - 2].y
    );
    ctx.lineTo(
      positions[positions.length - 1].x,
      positions[positions.length - 1].y
    );
    ctx.stroke();
    ctx.closePath();
  }, [size, positions])

  useLayoutEffect(() => {
    if (positions.length > 1) {
      drawLine()
    }
  }, [positions, drawLine]);

  const handleMouseDown = function (e) {
    setIsDrawing(true);
    const rect = canvasEl.current.getBoundingClientRect();
    const x = e.clientX - rect.x;
    const y = e.clientY - rect.y;
    setPositions(positions.concat([{ x: x, y: y }]));
  };

  const handleMouseUp = function () {
    setIsDrawing(false);
    setPositions([]);
  };

  const handleMouseMove = function (e) {
    const rect = canvasEl.current.getBoundingClientRect();
    if (isDrawing) {
      const x = e.clientX - rect.x;
      const y = e.clientY - rect.y;
      setPositions(positions.concat([{ x: x, y: y }]));
    }
  };
  return (
    <div>
      <canvas
        ref={canvasEl}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      ></canvas>
      <CanvasActionsBar ref={canvasEl} />
    </div>
  );
};

export default Canvas;
