const CustomCursor = (props) => {
  const color = props.color;
  const size = props.size;
  const position = props.position;

  return (
    <div
      style={{
        position: "absolute",
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: `${color}`,
        borderRadius: "50%",
        cursor: "none",
        transition: "width 2s, height 2s, background-color 2s, transform 2s",
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        pointerEvents: "none",
      }}
    ></div>
  );
};

export default CustomCursor;
