import React, { Component } from "react";
import Tabletop from "tabletop";
import Home from "./components/Home";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    Tabletop.init({
      key: "1uC0pB_Ku_UIH0HfuA2DU_qm-gRdzO3aONHZE3OwxsFQ",
      callback: (googleData) => {
        this.setState({
          data: googleData,
         
        }); 
      },
      simpleSheet: true,
    });
   
  }

  render() {
    
    const { data } = this.state;    
    return (
    <Home data={data}/>
    
     ) 
  }
}

export default App;
