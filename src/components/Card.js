import React from "react";
import ItemCard from "./ItemCard";
import "./Card.css";
function Card({ geo }) {
  return (
    <div className="card">
      <ItemCard title="ip address" value={geo.ip} />
      <ItemCard title="location" value={geo.region ? `${geo.region}` : ""} />
      <ItemCard title="timezone" value={geo.timezone} />
      <ItemCard title="isp" value={geo.org} />
    </div>
  );
}

export default Card;
