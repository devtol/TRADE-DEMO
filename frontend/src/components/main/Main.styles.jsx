import styled from "styled-components";

export const Main = styled.div`
  flex: 11;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: ${(p) =>
    p.isSidebar ? "160px" : p.viewSidebar ? "75px" : "0px;"};
  transition: 0.1s ease-in all;
`;
