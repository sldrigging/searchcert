import React, {Component} from 'react';
import './App.css';
import {  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import Home from './components/Home'
import CertList from './components/CertList'
import Certificate from './components/Certificate';
import About from './components/About'

class App extends Component {
  
  render() {
    
  return(
    <Router>
      <div>  
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/certlist">
            <CertList />
          </Route>
          <Route path="/certificate">
            <Certificate />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>    
  )}
}
export default App;



