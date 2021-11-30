const CustomCursor = (props) => {
  const customCursorPosition = props.customCursorPosition;
  const color = props.color;
  const size = parseInt(props.size, 10);

  return (
    <div
      style={{
        position: "absolute",
        height: `${2 + size}px`,
        width: `${2 + size}px`,
        backgroundColor: `${color}`,
        borderRadius: "2px",
        cursor: "none",
        transition: "width 2s, height 2s, background-color 2s, transform 2s",
        left: `${customCursorPosition.clientX}px`,
        top: `${customCursorPosition.clientY}px`,
      }}
    ></div>
  );
};

export default CustomCursor;
