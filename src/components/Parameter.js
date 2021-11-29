const Parameter = (props) => {
  const name = props.name;
  const children = props.children;

  return (
    <div>
      icon - {name}
      {children}
    </div>
  );
};

export default Parameter;

