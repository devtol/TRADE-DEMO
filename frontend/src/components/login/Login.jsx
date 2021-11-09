import * as s from "./Login.styles";
import { MailOutline, VpnKey } from "@mui/icons-material";
import { useState, useEffect } from "react";
const Login = (props) => {
  const [isClickedRegister, setClickedRegister] = useState(false);
  const [email, setEmail] = useState("");

  useEffect(() => {
    console.log("email change");
    console.log("email in");
  }, [email]);

  useEffect(() => {
    if (!props.isOpenedModalComponent) {
      setClickedRegister(false);
    }
  }, [props.isOpenedModalComponent, isClickedRegister]);

  const onRegister = () => {
    isClickedRegister
      ? console.log("등록")
      : setClickedRegister(true);

    props.setIsClickedRegister(true);
  }

  const onLogin = () => {
    isClickedRegister
      ? setClickedRegister(false)
      : console.log("로그인")

    props.setIsClickedRegister(false);
  }

  const handleKeyup = (e) => {
    let email = e.target.value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      console.log("이메일 ok");
    } else {
      console.log("이메일 no");
    }

  }

  return (
    <s.Component>
      {
        !!isClickedRegister &&
        <s.ItemContainer>
          <s.TitleContainer>
            <s.Icon>
              <VpnKey />
            </s.Icon>
            <s.Text>Username</s.Text>
          </s.TitleContainer>
          <s.InputContainer>
            <s.Input type="text"></s.Input>
          </s.InputContainer>
        </s.ItemContainer>
      }
      <s.ItemContainer>
        <s.TitleContainer>
          <s.Icon>
            <MailOutline />
          </s.Icon>
          <s.Text>Email</s.Text>
        </s.TitleContainer>
        <s.InputContainer>
          <s.Input
            type="text"
            name="email"
            id="email"
            onKeyUp={handleKeyup}
            onChange={(e) => setEmail(e.target.value)}
          ></s.Input>
        </s.InputContainer>
      </s.ItemContainer>
      <s.ItemContainer>
        <s.TitleContainer>
          <s.Icon>
            <VpnKey />
          </s.Icon>
          <s.Text>Password</s.Text>
        </s.TitleContainer>
        <s.InputContainer>
          <s.Input type={"password"}></s.Input>
        </s.InputContainer>
      </s.ItemContainer>
      {
        !!isClickedRegister &&
        <s.ItemContainer>
          <s.TitleContainer>
            <s.Icon>
              <VpnKey />
            </s.Icon>
            <s.Text>Confirm password</s.Text>
          </s.TitleContainer>
          <s.InputContainer>
            <s.Input type={"password"}></s.Input>
          </s.InputContainer>
        </s.ItemContainer>
      }
      <s.ItemContainer style={{ flexDirection: "row" }}>
        <s.ButtonContainer>
          <s.Button onClick={onRegister}>
            {
              isClickedRegister
                ? "등록"
                : "회원가입"
            }
          </s.Button>
        </s.ButtonContainer>
        <s.ButtonContainer>
          <s.Button onClick={onLogin}>
            {
              isClickedRegister
                ? "취소"
                : "로그인"
            }
          </s.Button>
        </s.ButtonContainer>
      </s.ItemContainer>
    </s.Component>
  );
};

export default Login;