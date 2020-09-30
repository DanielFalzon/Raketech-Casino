import{ BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';
import Header from './GroupComponents/Header'
import './App.scss';
import Switch from "react-bootstrap/esm/Switch";

import Home from './Views/Home';
import About from './Views/About';
import CasinoReview from './Views/CasinoReview';
import ContactUs from './Views/ContactUs';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch className="p-0">
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/casino-review/:id">
            <CasinoReview />
          </Route>
          <Route exact path="/contact-us">
            <ContactUs />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
