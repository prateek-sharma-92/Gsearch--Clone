import React from "react";

import "./SearchResults.css";

function SearchResults({ item }) {
  return (
    <div className="result-container">
      <div className="resultUpperPortion">
        <img alt="Thumbnail" src={item.pagemap.cse_image[0].src} />
        <div className="resultText">
          <a href={item.link}>{item.link}</a>
        </div>
      </div>
      <div className="resultLowerPortion">
        <div className="resultTitle">
          <h3> {item.title}</h3>
        </div>
        <div className="resultDesc">
          <p> {item.snippet}</p>
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
