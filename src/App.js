import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import './App.css';
import Header from "./layout/Header";
import MovieContainer from "./components/Movie/MovieContainer";
import ShowContainer from "./components/Show/ShowContainer";


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Switch>
      <Route path="/" exact component={MovieContainer} />
      <Route path="/movie/:id" component={ShowContainer} />{" "}
      <Route path="/movie" component={ShowContainer} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
