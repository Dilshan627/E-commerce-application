import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Card.css";

const Card = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const Url = "http://localhost:8000/products/getItem";
    axios
      .get(Url)
      .then((response) => {
        setItems(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleClick = (data) => {
    const existingCartData = localStorage.getItem("cartData");
    const cartData = existingCartData ? JSON.parse(existingCartData) : [];
    cartData.push(data);
    localStorage.setItem("cartData", JSON.stringify(cartData));
    console.log("Item added to the cart!");
  };

  return (
    <div>
      {items.map((card) => (
        <div className="card" key={card.name}>
          <img src={card.image} alt="Item" className="image" />
          <h3 className="title">{card.name}</h3>
          <h3 className="title">{card.brand}</h3>
          <h3 className="title">{card.description}</h3>
          <p className="description">{card.price}</p>
          <button className="button" onClick={() => handleClick(card)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
