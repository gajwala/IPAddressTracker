import React from "react";
import "./ItemCard.css";
function ItemCard({ title, value }) {
  return (
    <div className="item_card">
      <h4 className="item_card__title">{title}</h4>
      <p className="item_card__value">{value}</p>
    </div>
  );
}

export default ItemCard;
