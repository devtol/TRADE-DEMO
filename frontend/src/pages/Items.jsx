import React from "react";
import axios from "axios";
import styled from "styled-components";
import Item from "../components/item/Item";
import { LinearProgress } from "@mui/material";
import { useState, useEffect } from "react";
import UseScrollY from "../../src/hooks/UseScrollY";

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
  //background-color: #e9e9e9;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FilterItem = styled.div`
  padding: 5px 10px;
  width: 40px;
  text-align: center;
  margin: 0px 10px;
  background-color: ${(p) => (p.isFilterSelected ? "#2e367d" : "transparent")};
  color: ${(p) => (p.isFilterSelected ? "white" : "black")};
  border-radius: 4px;
  //transition: 0.2s ease-in all;
  &:hover {
    cursor: pointer;
    background-color: 2px solid #2e367d;
  }
`;
const SubFilterItem = styled.div`

`;

const ItemListcontainer = styled.div`
  padding: 50px 30px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const getRange = (width) => {
  if(width <= 875) return 1;
  if(width > 875 && width <= 1248) return 2;
  if(width > 1248 && width <= 1705) return 3;
  if(width > 1705 && width <= 2077) return 4;
  if(width > 2077) return 5;
};

const Items = () => {
  const [metaItems, setMetaItems] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedFilter, setSelctedFilter] = useState("all");
  const [subFilter, setSubFilter] = useState({});
  const { scrollY } = UseScrollY();

  const fetchItems = async () => {
    try {
      const res = await axios.get("/api/items");
      setMetaItems(res.data);
      setItems(res.data.slice(0, 20));
    } catch (err) {
      console.log(err);
      setError(err);
    }
    console.log("metaItems", metaItems);
    setLoading(false);
  };

  useEffect(() => {
    console.log("패치 아이템");
    setLoading(true);
    fetchItems();
  }, []);

  useEffect(() => {
    const range = getRange(window.innerWidth);
    console.log(window.innerWidth,range,"스크롤", Math.round(scrollY/360), Math.round((items.length/range)-5));
    if((Math.round((items.length/range)-5)) < Math.round(scrollY/360)) {
      selectedFilter === "all" 
        ? setItems([...items, ...metaItems.slice(items.length, items.length+(range * 10))])
        : setItems([...items, ...metaItems.filter((item) => item.grade === selectedFilter).slice(items.length, items.length+(range * 10))]);
    }
  }, [scrollY]);

  const filters = [
    { id: 0, name: "전체", value: "all", color: "white" },
    { id: 1, name: "일반", value: "일반", color: "white" },
    { id: 2, name: "세트", value: "세트", color: "green" },
    { id: 3, name: "고유", value: "유니크", color: "gold" },
    { id: 4, name: "룬어", value: "룬어", color: "gray" },
  ];

  useEffect(() => {
    //console.log(selectedFilter);
    const range = getRange(window.innerWidth);

    selectedFilter === "all" 
      ? setItems(metaItems.slice(0, range * 10))
      : setItems(metaItems.filter((item) => item.grade === selectedFilter).slice(0, range * 10));
    
    if(selectedFilter !== "all") {
      console.log(
        metaItems
          .filter((item) => item.grade === selectedFilter)
          .map((item) => item.type) 
          .reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
      );
    }

    console.log(
      metaItems
        .filter((item) => item.grade === selectedFilter)
        .map((item) => item.options.itemTypes)
    )
  }, [selectedFilter]);

  const handleFilterClick = (value) => {
    setSelctedFilter(value);
  };

  //console.log(selectedFilter);
  return (
    <Container>
      {loading && <LinearProgress />}
      <FilterContainer>
        {filters.map((filter) => (
          <FilterItem
            id={filter.id}
            onClick={() => handleFilterClick(filter.value)}
            color={filter.color}
            isFilterSelected={selectedFilter === filter.value}
          >
            {filter.name}
          </FilterItem>
        ))}
      </FilterContainer>
      <ItemListcontainer>
      {error 
        ? <div>아이템 정보를 가져오던중 에러가 발생하였습니다.</div>
        : items.map((item) => (
          <Item item={item} key={item._id}></Item>
        ))
      }
      </ItemListcontainer>
    </Container>
  );
};

export default Items;
