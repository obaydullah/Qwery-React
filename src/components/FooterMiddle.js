import React from "react";

export default function FooterMiddle() {
  return (
    <>
      <div className="footer__middle">
        <div className="container">
          <div className="footer__inner">
            {/* /////Footer Left//// */}
            <div className="footer__left">
              <h2 class="footer__input--text">
                Let's Go On Vaccation, Make Your Day
              </h2>

              <div class="footer__input">
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  class="footer__input--email"
                />

                <button class="footer__form--icon" type="submit">
                  <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>

            {/* //////Footer Service//////// */}
            <div className="footer__service">
              <div class="footer__service">
                <li class="footer__list--item">
                  <a href="" class="footer__list--link footer__list--special">
                    Services
                  </a>
                </li>
                <li class="footer__list--item">
                  <a href="" class="footer__list--link">
                    Email Marketing
                  </a>
                </li>
                <li class="footer__list--item">
                  <a href="" class="footer__list--link">
                    Campaigns
                  </a>
                </li>
                <li class="footer__list--item">
                  <a href="" class="footer__list--link">
                    Branding
                  </a>
                </li>
                <li class="footer__list--item">
                  <a href="" class="footer__list--link">
                    Offline
                  </a>
                </li>
              </div>
            </div>
            {/* /////Footer About/// */}
            <div className="footer__about">
              <div class="footer__about">
                <li class="footer__list--item">
                  <a href="" class="footer__list--link footer__list--special">
                    About
                  </a>
                </li>
                <li class="footer__list--item">
                  <a href="" class="footer__list--link">
                    Our Story
                  </a>
                </li>
                <li class="footer__list--item">
                  <a href="" class="footer__list--link">
                    Benefits
                  </a>
                </li>
                <li class="footer__list--item">
                  <a href="" class="footer__list--link">
                    Team
                  </a>
                </li>
                <li class="footer__list--item">
                  <a href="" class="footer__list--link">
                    Career
                  </a>
                </li>
              </div>
            </div>
            {/* ////////Footer Help////// */}
            <div className="footer__help">
              <div class="footer__help">
                <li class="footer__list--item">
                  <a href="" class="footer__list--link  footer__list--special">
                    Help
                  </a>
                </li>
                <li class="footer__list--item">
                  <a href="" class="footer__list--link">
                    Out Story
                  </a>
                </li>
                <li class="footer__list--item">
                  <a href="" class="footer__list--link">
                    Benefits
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
