import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import submitSearch from "../../Redux/action";
import { API_KEY, searchEngineID } from "../../Keys";

function Search({ hideButton }) {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchString = async (e) => {
    e.preventDefault();
    await axios
      .get(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${searchEngineID}&q=${input}`
      )
      .then((res) => {
        dispatch(submitSearch(res.data));
        console.log(res.data);
      });

    navigate("/search");
  };

  return (
    <form>
      <div className="search-container">
        <div className="search-icon">
          <SearchIcon />
        </div>
        <input
          className="searchBox"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="search-icon2">
          <MicIcon />
        </div>
      </div>
      {!hideButton && (
        <div className="button-container">
          <button className="button" type="submit" onClick={searchString}>
            {" "}
            Google Search
          </button>
          <button className="button"> I'm feeling lucky</button>
        </div>
      )}
    </form>
  );
}

export default Search;
