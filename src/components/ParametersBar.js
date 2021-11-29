import Parameter from "./Parameter";

const ParametersBar = () => {
  return (
    <div>
      <Parameter name={"Color"}>
        {["0", "100", "150", "200", "250"].map((number) => {
          return (
            <div
              key={number}
              style={{
                backgroundColor: `rgba(${number},${number},${number},1)`,
                width: "50px",
                height: "50px",
              }}
            />
          );
        })}
      </Parameter>
      <Parameter name={"Size"} />
      {["1", "2", "3", "4", "5"].map((number) => {
        return <div key={number}>{number}</div>;
      })}
    </div>
  );
};

export default ParametersBar;
