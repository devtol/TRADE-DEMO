import * as s from "./Login.styles";
import { MailOutline, VpnKey } from "@mui/icons-material";

const Login = () => {
  return (
    <s.Component>
      <s.ItemContainer>
        <s.TitleContainer>
          <s.Icon>
            <MailOutline />
          </s.Icon>
          <s.Text>Email</s.Text>
        </s.TitleContainer>
        <s.InputContainer>
          <s.Input></s.Input>
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
      <s.ItemContainer style={{ flexDirection: "row" }}>
        <s.ButtonContainer>
          <s.Button>Register</s.Button>
        </s.ButtonContainer>
        <s.ButtonContainer>
          <s.Button>Login</s.Button>
        </s.ButtonContainer>
      </s.ItemContainer>
    </s.Component>
  );
};

export default Login;
