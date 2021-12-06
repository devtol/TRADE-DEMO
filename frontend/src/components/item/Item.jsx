import React from "react";
import * as s from "./Item.styles";
const Item = ({ item }) => {
  return (
    <s.ItemContainer>
      <s.ItemContainerTop>
        <s.ItemContainerTopLeft>
          <s.ItemImageContainer>
            <s.ItemImage src={`resources/images/items/${item.image}`} alt={item.image} size={item.size}/>
          </s.ItemImageContainer>
        </s.ItemContainerTopLeft>
        <s.ItemContainerTopRight>
          <s.ItemContainerTopRightTop>
            <s.ItemContainerTopRightTopLeft></s.ItemContainerTopRightTopLeft>
            <s.ItemContainerTopRightTopRight></s.ItemContainerTopRightTopRight>
          </s.ItemContainerTopRightTop>
          <s.ItemContainerTopRightBody>
            <s.ItemContainerTopRightBodyTop>{item.name}</s.ItemContainerTopRightBodyTop>
            <s.ItemContainerTopRightBodyFooter>{item.type}</s.ItemContainerTopRightBodyFooter>
          </s.ItemContainerTopRightBody>
          <s.ItemContainerTopRightFooter>
            {item.options.default.map((item) => (
              (item.name.indexOf("피해") > -1 || item.name.indexOf("방어력") > -1) && <div>{item.name}:{item.value}</div>
            ))}
          </s.ItemContainerTopRightFooter>
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
