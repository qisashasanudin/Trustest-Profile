import React from "react";

import "./plan-container.scss";
// import { Button } from "../../atoms";
const PlanContainer = ({ logo, plan, price, buttonStyle, children }) => {
  return (
    <div className="plan-container">
      <img src={logo} alt="logo" />
      <h3>{plan}</h3>
      <div className="plan-container__benefits">{children}</div>
      {plan === "Free Plan" ? (
        <h1>Free</h1>
      ) : (
        <h1>
          {price} <span>/ mo</span>
        </h1>
      )}
      {/* <Button
        buttonStyle={buttonStyle}
        buttonSize="medium"
        buttonColor="primary"
      >
        Select
      </Button> */}
    </div>
  );
};

export default PlanContainer;
