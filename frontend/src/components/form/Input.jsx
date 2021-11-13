import * as s from "./Input.styles";

const Input = (props) => {
  console.log(props);
  return (
    <s.Component>
      <s.Input
        key={props.id}
        placeholder={props.placeholder}
        type={props.type}
      ></s.Input>
    </s.Component>
  );
};

export default Input;
