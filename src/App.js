import React, { Component } from 'react';
import logo from './logo.svg';
import Home from "./Components/Home"
import Footer from "./Components/Footer"
import Intereists from "./Components/Intereists"
import Nav from "./Components/Nav"
import './App.css';
import {BrowserRouter, Router, Route, Switch ,link} from "react-router-dom"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
         
<Nav/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/Intereists" component={Intereists} />
          </Switch>

      <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
