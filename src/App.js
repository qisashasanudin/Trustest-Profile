import { Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar/navbar.component";
import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import "./App.scss";
import ProductPage from "./pages/productpage/productpage.component";
import MemberPage from "./pages/memberpage/memberpage.component";
import AchievementPage from "./pages/achievementpage/achievementpage.component";
import ContactPage from "./pages/contactpage/contactpage.component";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products" component={ProductPage} />
        <Route exact path="/members" component={MemberPage} />
        <Route exact path="/achievements" component={AchievementPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
    </div>
  );
};

export default App;
