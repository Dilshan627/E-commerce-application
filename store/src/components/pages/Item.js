import React from "react";
import "../css/Item.css";
import Card from "../item/cart";
// import img from "../assets/HP-EliteBook-840-G9_20230221-194134_full.jpeg";

export default function Item() {
  return (
    <div className="itemContainer">
      <div className="category">
        <label>ITEM CATEGORY</label>
        <button className="category-btn">All</button>
        <button className="category-btn">Laptop</button>
        <button className="category-btn">Monitors</button>
        <button className="category-btn">Graphics Cards</button>
        <button className="category-btn">Memory</button>
      </div>
      <div className="itemView">{<Card />}</div>
    </div>
  );
}
