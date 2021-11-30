import {
  useLayoutEffect,
  useEffect,
  useState,
  useRef,
  useCallback,
} from "react";
import CanvasActionsBar from "./CanvasActionsBar";
import CustomCursor from "./CustomCursor";

const Canvas = (props) => {
  const canvasEl = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [drawingPositions, setDrawingPositions] = useState([]);
  const [customCursorPosition, setCustomCursorPosition] = useState(null);

  const size = props.size;
  const color = props.color;

  const drawLine = useCallback(() => {
    const ctx = canvasEl.current.getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = size;
    ctx.moveTo(
      drawingPositions[drawingPositions.length - 2].x,
      drawingPositions[drawingPositions.length - 2].y
    );
    ctx.lineTo(
      drawingPositions[drawingPositions.length - 1].x,
      drawingPositions[drawingPositions.length - 1].y
    );
    ctx.stroke();
    ctx.closePath();
  }, [size, color, drawingPositions]);

  useLayoutEffect(() => {
    if (drawingPositions.length > 1) {
      drawLine();
    }
  }, [drawingPositions, drawLine]);

  const handleMouseDown = function (e) {
    setIsDrawing(true);
    const rect = canvasEl.current.getBoundingClientRect();
    const x = e.clientX - rect.x;
    const y = e.clientY - rect.y;
    setDrawingPositions(drawingPositions.concat([{ x: x, y: y }]));
  };

  const handleMouseUp = function () {
    setIsDrawing(false);
    setDrawingPositions([]);
  };

  const handleMouseMove = function (e) {
    const rect = canvasEl.current.getBoundingClientRect();
    setCustomCursorPosition(e);

    if (isDrawing) {
      setCustomCursorPosition(null);
      const x = e.clientX - rect.x;
      const y = e.clientY - rect.y;
      setDrawingPositions(drawingPositions.concat([{ x: x, y: y }]));
    }
  };

  return (
    <div>
      <canvas
        ref={canvasEl}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setCustomCursorPosition(null)}
        style={{ cursor: "none" }}
      ></canvas>
      {customCursorPosition && (
        <CustomCursor
          customCursorPosition={customCursorPosition}
          color={color}
          size={size}
        />
      )}
      <CanvasActionsBar ref={canvasEl} />
    </div>
  );
};

export default Canvas;
