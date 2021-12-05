import React from "react";
import * as s from "./Item.styles";
const Item = ({ item }) => {
  return (
    <s.ItemContainer>
      <s.ItemContainerTop>
        <s.ItemContainerTopLeft>
          <s.ItemImageContainer>
            <s.ItemImage src={`resources/images/items/${item.image}`} alt={item.image}/>
          </s.ItemImageContainer>
        </s.ItemContainerTopLeft>
        <s.ItemContainerTopRight>
          <s.ItemContainerTopRightTop>
            <s.ItemContainerTopRightTopLeft></s.ItemContainerTopRightTopLeft>
            <s.ItemContainerTopRightTopRight></s.ItemContainerTopRightTopRight>
          </s.ItemContainerTopRightTop>
          <s.ItemContainerTopRightBody>
            <s.ItemContainerTopRightBodyTop>{item.name}</s.ItemContainerTopRightBodyTop>
            <s.ItemContainerTopRightBodyFooter>{item.type}요구레벨{item.options.default.map((item)=> item.name === "요구 레벨").value}</s.ItemContainerTopRightBodyFooter>
          </s.ItemContainerTopRightBody>
          <s.ItemContainerTopRightFooter></s.ItemContainerTopRightFooter>
        </s.ItemContainerTopRight>
      </s.ItemContainerTop>
      <s.ItemContainerBody></s.ItemContainerBody>
      <s.ItemContainerFooter>
        <s.ItemContainerFooterLeft></s.ItemContainerFooterLeft>
        <s.ItemContainerFooterRight></s.ItemContainerFooterRight>
      </s.ItemContainerFooter>
    </s.ItemContainer>
  );
};

export default Item;
