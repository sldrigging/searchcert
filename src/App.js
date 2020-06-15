import React, {Component} from 'react';
import './App.css';
import {  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import Home from './components/Home'

class App extends Component {
  
  render() {
    
  return(
    <Router>
      <div>  
        <Switch>        
          <Route path="/">
            <Home />
          
          </Route>
        </Switch>
      </div>
    </Router>    
  )}
}
export default App;



