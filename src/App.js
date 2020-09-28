import{ BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';
import Header from './GroupComponents/Header'
import './App.scss';
import Home from './Views/Home';
import About from './Views/About';
import Switch from "react-bootstrap/esm/Switch";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
