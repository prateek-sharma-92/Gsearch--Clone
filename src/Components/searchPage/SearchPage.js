import React from "react";
import Search from "../Search-box/Search";
import "./searchPage.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonPinCircleIcon from "@mui/icons-material/PersonPinCircle";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import PhotoCameraBackIcon from "@mui/icons-material/PhotoCameraBack";
import FeedIcon from "@mui/icons-material/Feed";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchResults from "../Search Results/SearchResults";
import { useSelector } from "react-redux";

function SearchPage() {
  const resultData = useSelector((state) => state.reducer);
  console.log(resultData);
  return (
    <>
      <div className="searchPage-container">
        <div className="searchBar">
          <img
            alt="logo"
            src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          />
          <div className="searchArea">
            <Search hideButton />
            <div className="iconsBelowSearch">
              <SearchIcon />
              <span>All</span> &nbsp; &nbsp;
              <PersonPinCircleIcon />
              <span>Maps</span> &nbsp; &nbsp;
              <OndemandVideoIcon />
              <span>Videos</span> &nbsp; &nbsp;
              <PhotoCameraBackIcon />
              <span>Images</span> &nbsp; &nbsp;
              <FeedIcon />
              <span>News</span> &nbsp; &nbsp;
              <MoreVertIcon />
              <span>More</span> &nbsp; &nbsp;
            </div>
          </div>
        </div>
      </div>
      <div className="Results">
        <div className="resultCount">{`showing ${resultData?.searchInformation.formattedTotalResults} results in ${resultData?.searchInformation.formattedSearchTime} seconds`}</div>
        <br /> <br />
        {(resultData?.items).map((item) => (
          <SearchResults item={item} />
        ))}
      </div>
    </>
  );
}

export default SearchPage;
