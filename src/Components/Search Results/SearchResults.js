import React from "react";

import "./SearchResults.css";

function SearchResults({ item }) {
  return (
    <div className="result-container">
      <div className="resultUpperPortion">
        {/* <img alt="Thumbnail" src="/" /> */}
        <div className="resultText">
          <a href="/">{item.displayLink}</a>
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
      <hr />
    </div>
  );
}

export default SearchResults;
