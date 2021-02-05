import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* Switch ensures that only one React component shows 
          in the browser at any given time.*/}
          <Switch>
            {/* 'exact' to avoid matching '/' as '/create'  
            If we don't use 'exact', React confuses '/' as '/create' and 
            even if we want to go to '/create' page, 
            it brings us to the homepage*/}
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
