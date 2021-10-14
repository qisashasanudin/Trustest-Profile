import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from "./pages/home";
import Navbar from "./components/organism/Navbar";
import Footer from "./components/organism/Footer";
import ExamPreparation from "./pages/examPreparation";
import ExamInProgress from "./pages/examInProgress";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/exam_prep" component={ExamPreparation} />
          <Route path="/exam_in_progress" component={ExamInProgress} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
