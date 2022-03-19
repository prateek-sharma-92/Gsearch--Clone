import React from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";

function Search({ hideButton }) {
  return (
    <>
      <div className="search-container">
        <div className="search-icon">
          <SearchIcon />
        </div>
        <input className="searchBox" type="text" />
        <div className="search-icon2">
          <MicIcon />
        </div>
      </div>
      {!hideButton && (
        <div className="button-container">
          <button className="button"> Google Search</button>
          <button className="button"> I'm feeling lucky</button>
        </div>
      )}
    </>
  );
}

export default Search;
