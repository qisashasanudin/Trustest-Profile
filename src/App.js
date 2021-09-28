import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./pages/home";
import Navbar from "./components/organism/Navbar";
import Footer from "./components/organism/Footer";
import ExamPrep from "./pages/examPreparation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/exam_prep" component={ExamPrep} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
