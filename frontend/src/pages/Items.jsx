import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

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
  }, [items]);

  return (
    <>
      <ul>
        {items.map(item => (
          <li>{item.name}</li>
        ))}
      </ul>
    </>
  )
}

export default Items;
