import styled from "styled-components";
export const ItemContainer = styled.div`
  width: 300px;
  height: auto;
  margin: 10px;
  border: 1px solid silver;
  display: flex;
  flex-direction: column;
`;
export const ItemContainerTop = styled.div`
  flex: 5;
  background-color: white;
  display: flex;
`;
export const ItemContainerTopLeft = styled.div`
  width: 125px;
  height: 150px;
  flex: 5;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ItemImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ItemImage = styled.img`
  width: ${p => (p.size / 4) * 100}%;
  height: ${p => (p.size / 4) * 100}%;
  src: ${p => p.src};
  object-fit: contain;
`;
export const ItemContainerTopRight = styled.div`
  background-color: lightgoldenrodyellow;
  flex: 7;
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
  font-size: 14px;
  flex: 7;
  display: flex;
  flex-direction: column;
`;
export const ItemContainerTopRightBodyTopTop = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`
export const ItemContainerTopRightBodyTopBottom = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`
export const ItemContainerTopRightBodyFooter = styled.div`
  background-color: lightseagreen;
  font-size: 14px;
  flex: 5;
  display: flex;
  align-items: center;
`;
export const ItemContainerTopRightFooter = styled.div`
  background-color: lightpink;
  font-size: 14px;
  flex: 4;
  display: flex;
  align-items: center;
`;
export const ItemContainerBody = styled.div`
  flex: 6;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  background-color: #000000;
  padding: 10px 0px;
`;
export const ItemOptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 2px 0px;
`
export const ItemOptionLabel = styled.div`
  flex: 2;
  color: white;
`
export const ItemOptionText = styled.div`
  flex: 10;
  color: #6f72ff;
`
export const ItemContainerFooter = styled.div`
  flex: 1;
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
