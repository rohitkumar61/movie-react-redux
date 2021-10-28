import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Header from "./layout/Header";
import MovieContainer from "./components/Movie/MovieContainer";


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
      <Route path="/" exact component={MovieContainer} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
