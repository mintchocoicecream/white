import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../routes/Home";
import Projects from "../routes/Projects";
import Header from "./Header";


function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/">
              <Header />
              <Home />
            </Route>
            <Route exact path="/projects">
              <Header />
              <Projects />
            </Route>  
        </Switch>
    </Router>
  )
}

export default App;