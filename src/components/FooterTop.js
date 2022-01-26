import React from "react";

export default function FooterTop() {
  return (
    <>
      <div className="footer__top">
        <div className="container">
          <div className="footer__top--inner">
            <div className="footer__top--left">
              <div className="logo">
                <div className="logo">QWERy</div>
              </div>
            </div>
            <div className="footer__top--right">
              <span class="footer__right--text">Ready to Explore ? </span>
              <a href="#" class="btn__secondary">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
