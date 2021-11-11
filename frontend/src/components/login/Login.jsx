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
    if (!props.isOpenedModalComponent) {
      setBtnState("login");
    }
  }, [props.isOpenedModalComponent]);

  const onRegister = (e) => {
    e.preventDefault();
    setBtnState("register");

    props.setIsClickedRegister(true);
  }

  const onLogin = (e) => {
    e.preventDefault();
    setBtnState("login");
    props.setIsClickedRegister(false);
  }

  const inputs = [
    {
      id: 1,
      icon: <PersonOutline />,
      name: "username",
      type: "text",
      label: "닉네임",
      placeholder: "닉네임",
      errorMessage: "닉네임은 2글자 이상 문자와 숫자만 사용 가능합니다.(특수문자 불가능)",
      required: true,
      pattern: "^[A-Za-z0-9ㄱ-ㅎㅏ-ㅣ가-힣]",
      func: "register",
    },
    {
      id: 2,
      icon: <MailOutline />,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "이메일 형식이 잘못 되었습니다.",
      label: "Email",
      required: true,
      func: "register",
    },
    {
      id: 3,
      icon: <VpnKey />,
      name: "password",
      type: "password",
      placeholder: "비밀번호",
      errorMessage: "비밀번호는 8자리 이상 20자리 이하로 입력 가능하며 한개 이상의 숫자와 한개 이상의 특수문자를 포함해야 합니다.",
      label: "비밀번호",
      pattern: "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
      func: "register",
    },
    {
      id: 4,
      icon: <VpnKey />,
      name: "confirmPassword",
      type: "password",
      placeholder: "비밀번호",
      errorMessage: "위에 입력한 비밀번호와 맞지 않습니다.",
      pattern: values.password,
      required: true,
      func: "register",
    },
    {
      id: 5,
      icon: <MailOutline />,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "이메일 형식이 잘못 되었습니다.",
      label: "Email",
      required: true,
      func: "login",
    },
    {
      id: 6,
      icon: <VpnKey />,
      name: "password",
      type: "password",
      placeholder: "비밀번호",
      errorMessage: "비밀번호는 8자리 이상 20자리 이하로 입력 가능하며 한개 이상의 숫자와 한개 이상의 특수문자를 포함해야 합니다.",
      label: "비밀번호",
      pattern: "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
      func: "login",
    },
  ];

  const buttons = [
    {
      id: 1,
      text: "회원가입",
      type: "button",
      onClick: onRegister,
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
      text: "취소",
      type: "button",
      onClick: onLogin,
      func: "register",
    },
  ];

  return (
    <s.Component>
      <s.Form>
        {inputs.filter(e => e.func === btnState).map((input) => (
          <s.ItemContainer>
            <s.TitleContainer>
              <s.Icon>{input.icon}</s.Icon>
              <s.Text>{input.label}</s.Text>
            </s.TitleContainer>
            <s.InputContainer>
              <Input key={input.id} {...input} value={values[input.name]} />
            </s.InputContainer>
          </s.ItemContainer>
        ))}
        <s.ItemContainer style={{ flexDirection: "row" }}>
          {buttons.filter(e => e.func === btnState).map((button) => (
            <s.ButtonContainer>
              <Button key={button.id}
                {...button}
              />
            </s.ButtonContainer>
          ))}
        </s.ItemContainer>
      </s.Form>
    </s.Component>
  );
};

export default Login;
