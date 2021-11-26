import React from 'react'
import axios from 'axios';
import styled from "styled-components";
import Item from '../components/item/Item';
import { useState, useEffect } from 'react';


const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const ItemContainer = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid silver;
`;

const FilterContainer = styled.div`
  top: 0;
  padding: 10px;
  width: 100%;
  height: 50px;
  background-color: #ff0000;
  display: flex;
`;

const ItemListcontainer = styled.div`
  padding: 100px 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;


const Items = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  const fetchItems = async () => {
    try{
      const res = await axios.get("/api/items");
      setItems(res.data);
      console.log(res);
    }catch(err){
      console.log(err);
      setError(err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <Container>
        <FilterContainer>
          필터
        </FilterContainer>
        <ItemListcontainer>
        {items.map((item) => (
          <Item item={item} key={item._id}>

          </Item>
        ))}
        </ItemListcontainer>
    </Container>
  )
}

export default Items;
