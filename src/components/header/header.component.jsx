import React from "react";
import ButtonRound from "../../components/button-round/button-round.component";
import { Link } from "react-scroll";
import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <h1>
          AUTOMATED.
          <span> SECURED.</span>
        </h1>
        <p>
          <span>Trustest</span> is an autonomous <span>proctor</span> system to
          ensure the validity of examinee's work without <span>real-time</span>{" "}
          supervision needed!
        </p>
        <Link activeClass="active" to="alumni" spy={true} smooth={true}>
        <ButtonRound>
            See More
        </ButtonRound>
        </Link>
      </div>
    </div>
  );
};

export default Header;
