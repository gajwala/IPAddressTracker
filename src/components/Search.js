import React from "react";
import "./Search.css";
import image from "../images/icon-arrow.svg";
function Search({ onClick, onChnge }) {
  return (
    <div className="search">
      <input
        onChange={onChnge}
        className="search_input"
        type="text"
        placeholder="Search for any IP address"
      />
      <button onClick={onClick} className="search_button">
        <img src={image} width="12px" height="12px" alt="" srcSet="" />
      </button>
    </div>
  );
}

export default Search;
