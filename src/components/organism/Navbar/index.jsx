import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { Logo } from "../../../assets";
import { useHistory } from "react-router-dom";

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

  let history = useHistory();
  const routeToHomepage = () => {
    history.push("/");
  };

  return (
    <div className={`navbar ${scrolled ? "active" : ""} `}>
      <div className="navbar__logo" onClick={routeToHomepage}>
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
};

export default Navbar;
