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
  //const [isClickedRegister, setIsClickedRegister] = useState(false);

  //모달창 뒷 배경을 클릭하면 로그인창이 닫힘
  const onClickModalComponent = () => {
    setOpenedModalComponent(false);
    //setIsClickedRegister(false);
  };

  const onClickModalContainer = (e) => {
    //로그인창 클릭시 클릭이벤트 버블링 방지
    e.stopPropagation();
  };

  useEffect(() => {
    console.log("isOpenedModalComponent", isOpenedModalComponent);
  }, [isOpenedModalComponent]);

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
              {!!viewSidebar && <s.Text>로그인</s.Text>}
            </s.LoginButton>
          </s.LoginContainer>
        </s.TopbarRightContainer>
      </s.TopbarContentContainer>
      <s.ModalComponent
        isOpenedModalComponent={isOpenedModalComponent}
        onClick={onClickModalComponent}
      >
        <s.ModalContainer
          onClick={onClickModalContainer}
        //isClickedRegister={isClickedRegister}
        >
          <Login
            //setIsClickedRegister={setIsClickedRegister}
            isOpenedModalComponent={isOpenedModalComponent}
          />
        </s.ModalContainer>
      </s.ModalComponent>
    </s.Topbar>
  );
};

export default Topbar;
