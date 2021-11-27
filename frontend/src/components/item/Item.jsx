import React from "react";
import * as s from "./Item.styles";

const Item = ({ item }) => {
  return (
    <s.ItemContainer>
      <s.ItemContainerTop>
        <s.ItemContainerTopLeft></s.ItemContainerTopLeft>
        <s.ItemContainerTopRight>
          <s.ItemContainerTopRightTop>
            <s.ItemContainerTopRightTopLeft></s.ItemContainerTopRightTopLeft>
            <s.ItemContainerTopRightTopRight></s.ItemContainerTopRightTopRight>
          </s.ItemContainerTopRightTop>
          <s.ItemContainerTopRightBody>
            <s.ItemContainerTopRightBodyTop></s.ItemContainerTopRightBodyTop>
            <s.ItemContainerTopRightBodyFooter></s.ItemContainerTopRightBodyFooter>
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
