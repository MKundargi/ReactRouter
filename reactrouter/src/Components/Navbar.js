import React from "react";
import "../Inc/navbar.css";

const Navbar = (props) => {
  return (
    <>
      <nav className="main-nav ">
        {/* 1st logo  */}
        <div className="logo">
          <h2>
            <span>infokalash</span>
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div className="menu2">
          <ul>
            <li>
              <a href="/">{props.one}</a>
            </li>
            <li>
              <a href="/">{props.two}</a>
            </li>
            <li>
              <a href="/">{props.three}</a>
            </li>
            <li>
              <a href="/">{props.four}</a>
            </li>
            <li>
              <a href="/">{props.five}</a>
            </li>
            <li>
              <a href="/">{props.six}</a>
            </li>
          </ul>
        </div>

        {/* 3rd social media part */}
        <div className="social-media">
          {/* hamburget menu start  */}
          <div className="hamburger-menu"></div>
        </div>
      </nav>
      <div>{props.profile}</div>
    </>
  );
};

export default Navbar;
