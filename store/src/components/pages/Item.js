import React from "react";
import "../css/Item.css";

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
      <div className="itemView">{/* <Cart /> */}</div>
    </div>
  );
}
