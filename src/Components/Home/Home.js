import React from "react";
import Footer1 from "../Footer/Footer1";
import Search from "../Search-box/Search";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <img
        alt="Google Home"
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
      />
      <Search />
      <Footer1 />
    </div>
  );
}

export default Home;
