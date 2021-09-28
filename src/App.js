import "./App.css";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/home";
import Navbar from "./components/organism/Navbar";
import Footer from "./components/organism/Footer";
import ExamPrep from "./pages/examPreparation";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Homepage} />
          <Route path="/exam_prep" component={ExamPrep} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
