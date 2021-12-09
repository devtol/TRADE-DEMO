import styled from "styled-components";

export const Topbar = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  min-height: 75px;
  max-height: 75px;
  position: fixed;
  width: 100%;
  background-color: #2e367d;
`;
export const TopbarContentContainer = styled.div`
  flex: 3;
  height: 75px;
  display: flex;
`;
export const TopbarLeftContainer = styled.div`
  flex: 3;
  position: relative;
  display: flex;
  align-items: stretch;
  justify-content: center;
`;
export const MenuContainer = styled.div`
  flex: 1;
  color: #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ContentContainer = styled.div`
  flex: 8;
  color: #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 30px;
  //padding: 10px 10px 20px;
  height: 75px;
`;
export const TopbarRightContainer = styled.div`
  flex: 1;
  position: fixed;
  height: 75px;
  top: 0;
  right: 0;
  width: ${(p) => (p.isSidebar ? "260px" : p.viewSidebar ? "130px" : "75px;")};
  transition: 0.1s ease-in all;
`;

export const LoginContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
export const LoginButton = styled.button`
  padding: 10px;
  font-size: 16px;
  height: 44px;
  border: none;
  background-color: #a0a0a0;
  display: flex;
  align-items: center;
  border-radius: 10px;
  color: white;
  transition: width 0.5s ease-in;
  &:hover {
    cursor: pointer;
  }
`;
export const Icon = styled.div`
  display: flex;
`;
export const Text = styled.div`
  margin-left: 5px;
  display: flex;
  height: 44px;
  justify-content: center;
  align-items: center;
`;
export const ModalComponent = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  ${(p) => (p.isOpenedModalComponent ? "display: flex;" : "display: none;")}
  align-items: center;
  justify-content: center;
`;
export const ModalContainer = styled.div`
  position: relative;
  width: 330px;
  //height: ${(p) => (p.isClickedRegister ? "650px" : "370px")};
  //background-color: white;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.05s ease-in all;
  padding: 10px;
`;
