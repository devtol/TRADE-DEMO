import styled from "styled-components";

export const BadgeContainer = styled.div`
  display: inline-flex;
`;
export const Badge = styled.div`
  padding: 2px 8px;
  font-size: 14px;
  font-weight: bold;
  color: #695f31;
  background-color: #d1c479;
  border: 2px solid #695f31;
  border-radius: 6px;

  &:hover {
    cursor: pointer;
  }
`;