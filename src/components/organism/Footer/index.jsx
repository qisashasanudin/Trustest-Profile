import React from "react";
import "./footer.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__description">
        <div className="footer__description__left">
          <h1>
            TRUST<span>est</span>
          </h1>
          <p>Customizeable Solutions for Secure Online Testing</p>
        </div>
        <div className="footer__description__right">
          <div className="footer__description__right__item">
            <h3>Explore Us</h3>
            <p>Our Careers</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <div className="footer__description__right__item">
            <h3>Connect Us</h3>
            <p>support@trustest.id</p>
            <p>+62 859-4564-4450</p>
            <p>TRUSTest, Kemang, Jakarta</p>
          </div>
        </div>
      </div>
      <p>
        Copyright 2021 <span>&#183;</span> All Rights Reserved{" "}
        <span>&#183;</span> Trusted
      </p>
    </div>
  );
};

export default Footer;
