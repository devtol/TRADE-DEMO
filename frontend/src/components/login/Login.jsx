import React from "react";
import axios from "axios";
import * as s from "./Login.styles";
import { MailOutline, VpnKey, PersonOutline } from "@mui/icons-material";
import { useState, useEffect } from "react";
import Button from "../button/Button";
import Input from "../form/Input";

const Login = (props) => {
  const [btnState, setBtnState] = useState("login");
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    console.log("props.isOpenedModalComponent", props.isOpenedModalComponent);
    if (!props.isOpenedModalComponent) {
      setBtnState("login");
      setValues({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    }
  }, [props.isOpenedModalComponent]);

  const onSignUp = (e) => {
    e.preventDefault();
    setBtnState("register");
    //props.setIsClickedRegister(true);
  };

  const onRegister = async (e) => {
    e.preventDefault();
    //console.log("onRegister");
    console.log(values);
    return;

    try {
      const res = await axios.post("/api/auth/register", {
        username: values.username,
        email: values.email,
        password: values.password
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const onLogin = (e) => {
    e.preventDefault();
  };

  const onCancel = (e) => {
    e.preventDefault();
    setBtnState("login");
    //props.setIsClickedRegister(false);
  };

  const inputs = [
    {
      id: 1,
      icon: <MailOutline />,
      name: "email",
      type: "email",
      //placeholder: "",
      errorMessage: "이메일 형식이 잘못 되었습니다.",
      label: "이메일",
      required: true,
      func: "register",
    },
    {
      id: 2,
      icon: <PersonOutline />,
      name: "username",
      type: "text",
      label: "닉네임",
      //placeholder: "",
      errorMessage:
        "닉네임은 2글자 이상 16자리 이하 알파벳과 숫자만 사용 가능합니다.(특수문자불가)",
      required: true,
      pattern: "^[A-Za-z0-9]{2,16}$",
      func: "register",
    },
    {
      id: 3,
      icon: <VpnKey />,
      name: "password",
      type: "password",
      //placeholder: "",
      errorMessage: "비밀번호는 8자리 이상 16자리 이하 문자와 숫자의 조합으로 입력 가능합니다",
      label: "비밀번호",
      pattern: "^(?=.*[0-9])(?=.*[a-z])[a-zA-Z0-9]{8,16}$",
      required: true,
      maxLength: 20,
      func: "register",
    },
    {
      id: 4,
      icon: <VpnKey />,
      name: "confirmPassword",
      type: "password",
      //placeholder: "",
      errorMessage: "위에서 입력한 비밀번호와 맞지 않습니다.",
      label: "비밀번호확인",
      pattern: values.password,
      required: true,
      maxLength: 20,
      func: "register",
    },
    {
      id: 5,
      icon: <MailOutline />,
      name: "email",
      type: "email",
      //placeholder: "",
      errorMessage: "이메일 형식이 잘못 되었습니다.",
      label: "이메일",
      required: true,
      func: "login",
    },
    {
      id: 6,
      icon: <VpnKey />,
      name: "password",
      type: "password",
      //placeholder: "",
      errorMessage: "비밀번호는 8자리 이상 16자리 이하 문자와 숫자의 조합으로 입력 가능합니다",
      label: "비밀번호",
      pattern:
        "^(?=.*[0-9])(?=.*[a-z])[a-zA-Z0-9]{8,16}$",
      required: true,
      maxLength: 20,
      func: "login",
    },
  ];

  const buttons = [
    {
      id: 1,
      text: "신규등록",
      type: "button",
      onClick: onSignUp,
      func: "login",
    },
    {
      id: 2,
      text: "로그인",
      type: "button",
      onClick: onLogin,
      func: "login",
    },
    {
      id: 3,
      text: "등록",
      type: "button",
      onClick: onRegister,
      func: "register",
    },
    {
      id: 4,
      text: "로그인 화면으로",
      type: "button",
      onClick: onCancel,
      func: "register",
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(values);
  }, [values]);

  return (
    <s.Component>
      <s.Form>
        {inputs
          .filter((e) => e.func === btnState)
          .map((input) => (
            <s.ItemContainer>
              <s.TitleContainer>
                <s.Icon>{input.icon}</s.Icon>
                <s.Text>{input.label}</s.Text>
              </s.TitleContainer>
              <s.InputContainer>
                <Input
                  key={input.id}
                  {...input}
                  maxLength={input.maxLength}
                  value={values[input.name]}
                  onChange={onChange}
                />
              </s.InputContainer>
            </s.ItemContainer>
          ))}
        <s.ItemContainer>
          {buttons
            .filter((e) => e.func === btnState)
            .map((button) => (
              <s.ButtonContainer>
                <Button key={button.id} {...button} onClick={button.onClick} />
              </s.ButtonContainer>
            ))}
        </s.ItemContainer>
      </s.Form>
    </s.Component>
  );
};

export default React.memo(Login);
