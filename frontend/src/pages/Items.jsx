import React from "react";
import axios from "axios";
import styled from "styled-components";
import Item from "../components/item/Item";
import { LinearProgress } from "@mui/material";
import { useState, useEffect } from "react";
import UseScrollY from "../../src/hooks/UseScrollY";

const Container = styled.div`
  width: 100%;
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
  flex: 1;
  top: 0;
  position: sticky;
  padding: 20px 0px;
  width: 100%;
  height: 50px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FilterItem = styled.div`
  padding: 5px 5px;
  width: 40px;
  text-align: center;
  margin: 0px 5px;
  background-color: ${(p) => (p.isFilterSelected ? "#2e367d" : "transparent")};
  color: ${(p) => (p.isFilterSelected ? "white" : "black")};
  border-radius: 4px;
  //transition: 0.2s ease-in all;
  &:hover {
    cursor: pointer;
    background-color: 2px solid #2e367d;
  }
`;
const SubFilterContainer = styled.div`
  flex: 1;
  position: sticky;
  top: 75px;
  background-color: white;
  padding: 10px 0px;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const SubFilterItem = styled.div`
  padding: 5px 5px;
  width: auto;
  text-align: center;
  margin: 0px 10px;
  background-color: ${(p) => (p.isSubFilterSelected ? "#2e367d" : "transparent")};
  color: ${(p) => (p.isSubFilterSelected ? "white" : "black")};
  border-radius: 4px;
  &:hover {
    cursor: pointer;
    background-color: 2px solid #2e367d;
  }
`;

const ItemListcontainer = styled.div`
  flex: 10;
  padding: 10px 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const getRange = (width) => {
  if(width <= 825) return 1;
  if(width > 825 && width <= 1198) return 2;
  if(width > 1198 && width <= 1655) return 3;
  if(width > 1655 && width <= 2027) return 4;
  if(width > 2027) return 5;
};

const Items = () => {
  const [metaItems, setMetaItems] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedFilter, setSelctedFilter] = useState("all");
  const [selectedSubFilter, setSelctedSubFilter] = useState("");
  const [subFilters, setSubFilters] = useState([]);
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
    console.log("?????? ?????????");
    setLoading(true);
    fetchItems();
  }, []);

  useEffect(() => {
    const range = getRange(window.innerWidth);
    console.log(window.innerWidth,range,"?????????", Math.round(scrollY/360), Math.round((items.length/range)-5));
    if(selectedSubFilter !== "") return;

    if((Math.round((items.length/range)-5)) < Math.round(scrollY/360)) {
      selectedFilter === "all"
        ? setItems([...items, ...metaItems.slice(items.length, items.length+(range * 10))])
        : setItems([...items, ...metaItems.filter((item) => item.grade === selectedFilter).slice(items.length, items.length+(range * 10))]);
    }
  }, [scrollY]);

  const filters = [
    { id: 0, name: "??????", value: "all", color: "white" },
    { id: 1, name: "??????", value: "??????", color: "white" },
    { id: 2, name: "??????", value: "??????", color: "green" },
    { id: 3, name: "??????", value: "?????????", color: "gold" },
    { id: 4, name: "??????", value: "??????", color: "gray" },
    { id: 5, name: "???", value: "???", color: "gray" },
  ];

  //????????? ????????????
  useEffect(() => {
    const range = getRange(window.innerWidth);

    selectedFilter === "all" 
      ? setItems(metaItems.slice(0, range * 10))
      : setItems(metaItems.filter((item) => item.grade === selectedFilter).slice(0, range * 10));
    //??????????????? ?????????
    if(selectedFilter !== "all") {
      setSubFilters(
        ["??????","??????","?????????"].indexOf(selectedFilter) > -1
          ? metaItems
            .filter((item) => item.grade === selectedFilter)
            .map((item) => item.type) 
            .reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
          : metaItems
            .filter((item) => item.grade === selectedFilter)
            .map((item) => item.options.itemTypes)
            .flat()
            .reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])
      );
    }else{
      setSubFilters([]);
    }

    setSelctedSubFilter("");
  }, [selectedFilter]);

  //???????????? ????????? ?????????
  useEffect(() => {
    console.log(subFilters);
  }, [subFilters]);
  
  //??????????????? ????????????
  useEffect(() => {
    console.log(metaItems
      .filter((item) => item.grade === selectedFilter));
    //????????? ????????? ????????????
    if(selectedSubFilter == "") return;

    setItems(
      metaItems
        .filter((item) => item.grade === selectedFilter)
        .filter((item) => (
          ["??????","??????","?????????"].indexOf(selectedFilter) > -1) 
          ? item.type === selectedSubFilter 
          : item.options.itemTypes.indexOf(selectedSubFilter) > -1)
        );

  }, [selectedSubFilter]);
  const handleFilterClick = (value) => {
    setSelctedFilter(value);
  };

  const handleSubFilterClick = (value) => {
    setSelctedSubFilter(value);
  }


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
      {selectedFilter !== "all" && 
        <SubFilterContainer>
        {subFilters.map((subFilter, index) => <SubFilterItem
          id={index}
          onClick={() => handleSubFilterClick(subFilter)}
          isSubFilterSelected={selectedSubFilter === subFilter}
          >{subFilter}
          </SubFilterItem>
        )}
        </SubFilterContainer>
      }
      <ItemListcontainer>
      {error 
        ? <div>????????? ????????? ??????????????? ????????? ?????????????????????.</div>
        : items.map((item) => (
          <Item item={item} key={item._id}></Item>
        ))
      }
      </ItemListcontainer>
    </Container>
  );
};

export default Items;
