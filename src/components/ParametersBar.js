import Parameter from "./Parameter";

const ParametersBar = (props) => {
  const setSize = props.setSize;
  const setColor = props.setColor;

  return (
    <div>
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
      {["1", "2", "3", "4", "5"].map((number) => {
        return (
          <div key={number} onClick={() => setSize(number)}>
            {number}
          </div>
        );
      })}
    </div>
  );
};

export default ParametersBar;
