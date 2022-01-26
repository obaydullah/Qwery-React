import React from "react";
import "../app.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__inner">
            {/* //////////Logo/////////////////// */}
            <div className="logo">QWERy</div>
            {/* ////////////Navigation Start /////////////// */}
            <nav className="nav">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="" className="nav__link">
                    Information
                  </a>
                </li>
                <li className="nav__item">
                  <a href="" className="nav__link">
                    About Us
                  </a>
                </li>
                <li className="nav__item">
                  <a href="" className="nav__link">
                    Culture
                  </a>
                </li>
              </ul>
            </nav>
            {/* //////Search//////// */}
            <div className="search">
              <span>search</span>
              <i class="fas fa-search"></i>
            </div>
          </div>

          {/* //////Header Text/////////// */}
          <div className="header__text--inner">
            <div class="header__text--box">
              <h4 class="heading__secondary">Explore the nature beauty</h4>
              <h1>
                <h2 class="heading__text--main">Discover</h2>
                <h2 class="heading__text--sub">The Wonderful Indonesia</h2>
              </h1>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
