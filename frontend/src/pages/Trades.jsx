import React from "react";
import styled from "styled-components";

const Component = styled.div`
  flex: 11;
  display: flex;
  //height: 100vh;
  flex-direction: column;
`;
const TradeTopContainer = styled.div`
  flex: 2;
  display: flex;
`;
const TradeMidContainer = styled.div`
  flex: 9;
  display: flex;
`;
const Trades = () => {
  return (
    <Component>
      <TradeTopContainer>2안녕하세요</TradeTopContainer>
      <TradeMidContainer>3</TradeMidContainer>
    </Component>
  );
};

export default Trades;
