import React, {Component} from 'react';
import './App.css';
import {  BrowserRouter as Router,  Switch,  Route} from "react-router-dom";
import Test from './components/Test'

class App extends Component {
  
  render() {
    
  return(
    <Router>
      <div>  
        <Switch>        
          <Route path="/">
            <Test />          
          </Route>
        </Switch>
      </div>
    </Router>    
  )}
}
export default App;



