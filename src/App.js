import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/home";
import Navbar from "./components/organism/Navbar";
import Footer from "./components/organism/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Homepage} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
