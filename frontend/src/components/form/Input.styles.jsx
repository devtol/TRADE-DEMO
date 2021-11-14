import styled from "styled-components";

export const Component = styled.div`
  width: 240px;
`;

export const Input = styled.input`
  font-size: 16px;
  color: gray;
  border: none;
  border-bottom: 1px solid silver;
  padding: 10px;
  border: 1px solid silver;
  border-radius: 4px;
  width: 90%;
  &:invalid[focused="true"] ~ span {
    display: block;
  }
`;

export const Span = styled.span`
  display: none;
  color: red;
`;
