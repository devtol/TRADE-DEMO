import * as s from "./Button.styles";

const Button = (props) => {
  return (
    <s.Component>
      <s.Button type={props.type} onClick={props.onClick}>
        {props.text}
      </s.Button>
    </s.Component>
  );
};

export default Button;
