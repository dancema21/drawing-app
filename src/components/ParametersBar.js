import Parameter from "./Parameter";
import "./ParametersBar.css";

const ParametersBar = (props) => {
  const setSize = props.setSize;
  const size = props.size;
  const setColor = props.setColor;

  return (
    <div className="parameters-bar">
      <div className="parameter-text">
        <span>let's draw</span>
      </div>
      <Parameter name={"Color"}>
        {["black", "blue", "purple", "green", "yellow", "teal"].map((color) => {
          return (
            <div
              key={color}
              onClick={() => setColor(color)}
              style={{
                backgroundColor: color,
                width: "50px",
                height: "50px",
              }}
            />
          );
        })}
      </Parameter>
      <Parameter name={"Size"} />
          <div>
            <label htmlFor="size">Size</label>
            <input type="range" id="size" name="size" min="1" max="6" onChange={(e) => setSize(e.target.value)} value={size} />
          </div>
    </div>
  );
};

export default ParametersBar;
