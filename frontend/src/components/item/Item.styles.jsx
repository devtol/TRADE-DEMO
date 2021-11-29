import styled from "styled-components";
export const ItemContainer = styled.div`
  width: 350px;
  height: 400px;
  margin: 10px;
  border: 1px solid silver;
  display: flex;
  flex-direction: column;
`;
export const ItemContainerTop = styled.div`
  flex: 5;
  background-color: blue;
  display: flex;
`;
export const ItemContainerTopLeft = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ItemImageContainer = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;
export const ItemImage = styled.img`
  src: ${p => p.src};
`;
export const ItemContainerTopRight = styled.div`
  background-color: lightgoldenrodyellow;
  flex: 1;
  display: flex;
  flex-direction: column;
`;
export const ItemContainerTopRightTop = styled.div`
  background-color: lightgray;
  flex: 3;
  display: flex;
`;
export const ItemContainerTopRightTopLeft = styled.div`
  background-color: lightskyblue;
  flex: 1;
`;
export const ItemContainerTopRightTopRight = styled.div`
  background-color: lightslategray;
  flex: 1;
`;
export const ItemContainerTopRightBody = styled.div`
  background-color: lightgreen;
  flex: 5;
  display: flex;
  flex-direction: column;
`;
export const ItemContainerTopRightBodyTop = styled.div`
  background-color: lightsalmon;
  flex: 7;
`;
export const ItemContainerTopRightBodyFooter = styled.div`
  background-color: lightseagreen;
  flex: 5;
`;
export const ItemContainerTopRightFooter = styled.div`
  background-color: lightpink;
  flex: 4;
`;
export const ItemContainerBody = styled.div`
  flex: 5;
  background-color: lightblue;
`;
export const ItemContainerFooter = styled.div`
  flex: 2;
  background-color: lightcoral;
  display: flex;
`;
export const ItemContainerFooterLeft = styled.div`
  background-color: lightsteelblue;
  flex: 1;
`;
export const ItemContainerFooterRight = styled.div`
  background-color: lightyellow;
  flex: 3;
`;
export const Item = styled.div``;
