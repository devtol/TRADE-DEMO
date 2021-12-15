import React from "react";
import * as s from "./Item.styles";
const convertRuneType = (type) => {
  if(type == "w") return "무기";
  if(type == "s") return "방패";
  if(type == "h") return "투구";
  if(type == "a") return "갑옷";
}
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
            <s.ItemContainerTopRightBodyTop>
              <s.ItemContainerTopRightBodyTopTop>
                {item.name}
              </s.ItemContainerTopRightBodyTopTop>
              <s.ItemContainerTopRightBodyTopBottom>
                {item.type}
              </s.ItemContainerTopRightBodyTopBottom>
            </s.ItemContainerTopRightBodyTop>
            <s.ItemContainerTopRightBodyFooter>
              {item.options.default !== undefined 
                ? item.options.default.map((item) => ((item.name.indexOf("요구 레벨") > -1) && <div>{item.name}:{item.value}</div>))
                : <div>요구 레벨:{item.options.level}</div>
              }
            </s.ItemContainerTopRightBodyFooter>
          </s.ItemContainerTopRightBody>
          <s.ItemContainerTopRightFooter>
            {item.options.default !== undefined 
              ? item.options.default.map((item) => ((item.name.indexOf("피해") > -1 || item.name.indexOf("방어력") > -1) && <div>{item.name}:{item.value}</div>))
              : item.options.runes !== undefined && item.options.runes.map((rune) => rune)
            }
          </s.ItemContainerTopRightFooter>
        </s.ItemContainerTopRight>
      </s.ItemContainerTop>
      {item.grade !== "일반" &&
      <s.ItemContainerBody>
        {item.category !== "룬" 
          ? item.options.inherence.map((item) => (
            <s.ItemOptionContainer>
              <s.ItemOptionText>
                {item}
              </s.ItemOptionText>
            </s.ItemOptionContainer>
            ))
          : Object.entries(item.options).map(([k,v]) => (
              k !== "level" && 
              <s.ItemOptionContainer>
                <s.ItemOptionLabel>{convertRuneType(k)}</s.ItemOptionLabel>
              : <s.ItemOptionText>{v.map(e=>e)}</s.ItemOptionText>
              </s.ItemOptionContainer>
          ))
        }
      </s.ItemContainerBody>
      }
    </s.ItemContainer>
  );
};

export default Item;
