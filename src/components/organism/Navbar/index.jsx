import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { Logo } from "../../../assets";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, [scrolled]);
  return (
    <div className={`navbar ${scrolled ? "active" : ""} `}>
      <div className="navbar__logo" onClick={() => this.handleChange("/")}>
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Navbar;
