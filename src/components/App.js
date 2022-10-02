import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../routes/Home";
import Projects from "../routes/Projects";


function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/white">
              <Home />
            </Route>
            <Route exact path="/white/projects">
              <Projects />
            </Route>  
        </Switch>
    </Router>
  )
}

export default App;