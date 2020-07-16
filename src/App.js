import React from 'react';
import {Switch, Route, Redirect } from 'react-router-dom';
import Home from './Home'
import About from './Aboutus'
import Service from './Service'
import Contact from './Contact'
import Footer from "./Footer"
//import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Navbar from "./Navbar"

const App=()=> {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/service" component={Service}/>
        <Route exact path="/contact" component={Contact}/>
        <Redirect to="/"/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
