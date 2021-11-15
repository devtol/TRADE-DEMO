import * as s from "./Input.styles";
import { useState, useEffect } from "react";
const Input = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...others } = props;

  const handleFocus = (e) => {
    console.log("focused", focused);
    setFocused(true);
  };

  return (
    <s.Component>
      <s.Input
        {...others}
        onChange={onChange}
        onBlur={handleFocus}
        onFocused={() => others.name === "confirmPassword" && setFocused(true)}
        focused={focused.toString()}
      ></s.Input>
      <s.Span>{errorMessage}</s.Span>
    </s.Component>
  );
};

export default Input;
