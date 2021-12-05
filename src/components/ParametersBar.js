import "./ParametersBar.css";

const COLORS = [
  "black",
  "blue",
  "purple",
  "green",
  "yellow",
  "teal",
  "brown",
  "red",
  "peru",
  "grey",
];

const ParametersBar = (props) => {
  const setSize = props.setSize;
  const setColor = props.setColor;

  return (
    <div className="parameters-bar">
      <div className="parameter-text">
        <span>let's draw !</span>
      </div>

      <div className="grid grid-size">
        {[50, 37, 32, 28, 23].map((e) => {
          const style =
            e === 50
              ? { display: "flex", gridColumn: "1/3" }
              : { display: "flex", gridAutoColumn: "auto" };
          return (
            <div key={e} style={style}>
              <div
                style={{
                  backgroundColor: "black",
                  width: `${e}px`,
                  height: `${e}px`,
                  borderRadius: "50%",
                  margin: "auto auto",
                  cursor: "pointer"
                }}
                data-size={e}
                onClick={(element) => setSize(element.target.dataset.size)}
              ></div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-color">
        {COLORS.map((color) => {
          return (
            <div
              key={color}
              onClick={() => setColor(color)}
              style={{
                backgroundColor: color,
                width: "30px",
                height: "30px",
                display: "flex",
                borderRadius: "50%",
                gridAutoColumn: "auto",
                margin: "auto auto",
                cursor:"pointer"
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ParametersBar;
