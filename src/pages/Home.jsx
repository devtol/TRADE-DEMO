import React from "react";
import styled from "styled-components";
import Login from "../components/login/Login";
import TradeItem from "../components/trade/TradeItem";

const Component = styled.div`
  flex: 11;
`;

const Home = () => {
  return (
    <Component>
      <TradeItem />
    </Component>
  );
};

export default Home;
