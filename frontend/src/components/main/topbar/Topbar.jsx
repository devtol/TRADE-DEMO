import { Menu, LoginOutlined } from "@mui/icons-material";
import * as s from "./Topbar.styles";
import UseViewSizePhone from "../../../hooks/UseViewSizePhone";
import UseIsSidebar from "../../../hooks/UseIsSidebar";
import { useState, useEffect } from "react";
import Login from "../../login/Login";

const Topbar = (props) => {
  const [isSidebar, setSidebar] = UseIsSidebar(props.isSidebar);
  const [viewSidebar, setViewsidebar] = UseViewSizePhone(props.viewSidebar);
  const [isOpenedModalComponent, setOpenedModalComponent] = useState(false);
  const [isClickedRegister, setIsClickedRegister] = useState(false);
  const [isMouseOverModalContainer, setMouseOverModalContainer] =
    useState(false);

  const clickModalComponent = () => {
    console.log(
      "clickModalComponent",
      isMouseOverModalContainer,
      isOpenedModalComponent
    );
    if (!isMouseOverModalContainer) {
      setOpenedModalComponent(false);
      setIsClickedRegister(false);
    }
    //!isMouseOverModalContainer && setOpenedModalComponent(false);
    //!isMouseOverModalContainer && setIsClickedRegister(false);
  };

  const onMouseOverModalContainer = () => {
    console.log("onMouseOverModalContainer", onMouseOverModalContainer);
    setMouseOverModalContainer(true);
  };

  const onMouseLeaveModalContainer = () => {
    console.log("onMouseLeaveModalContainer", onMouseLeaveModalContainer);
    setMouseOverModalContainer(false);
  };

  useEffect(() => {
    console.log("isMouseOverModalContainer", isMouseOverModalContainer);
  }, [isMouseOverModalContainer]);

  return (
    <s.Topbar isSidebar={isSidebar} viewSidebar={viewSidebar}>
      <s.TopbarContentContainer>
        <s.TopbarLeftContainer>
          {!viewSidebar && (
            <s.MenuContainer>
              <Menu />
            </s.MenuContainer>
          )}
          <s.ContentContainer>content</s.ContentContainer>
        </s.TopbarLeftContainer>
        <s.TopbarRightContainer isSidebar={isSidebar} viewSidebar={viewSidebar}>
          <s.LoginContainer>
            <s.LoginButton onClick={() => setOpenedModalComponent(true)}>
              <s.Icon>
                <LoginOutlined />
              </s.Icon>
              {!!viewSidebar && <s.Text>Login</s.Text>}
            </s.LoginButton>
          </s.LoginContainer>
        </s.TopbarRightContainer>
      </s.TopbarContentContainer>
      <s.ModalComponent
        isOpenedModalComponent={isOpenedModalComponent}
        onClick={clickModalComponent}
      >
        <s.ModalContainer
          onMouseOver={onMouseOverModalContainer}
          onMouseLeave={onMouseLeaveModalContainer}
          isClickedRegister={isClickedRegister}
        >
          <Login
            setIsClickedRegister={setIsClickedRegister}
            isOpenedModalComponent={isOpenedModalComponent}
          />
        </s.ModalContainer>
      </s.ModalComponent>
    </s.Topbar>
  );
};

export default Topbar;
