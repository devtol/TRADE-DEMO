import styled from "styled-components";

export const Component = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const Form = styled.form`
  
`
export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TitleContainer = styled.div`
  display: flex;
  color: #3d3d3d;
  align-items: center;
`;
export const InputContainer = styled.div``;
export const Icon = styled.div``;
export const Text = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  margin-bottom: 10px;
  margin-left: 10px;
`;
export const Input = styled.input`
  font-size: 20px;
  color: gray;
  border: none;
  border-bottom: 1px solid silver;
`;

export const ButtonContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;
`;

export const Button = styled.button`
  padding: 10px;
  width: 100px;
  border: none;
  font-size: 16px;

  &:hover {
    cursor: pointer;
  }
`;
