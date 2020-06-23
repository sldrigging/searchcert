import React from "react";
import "./../App.css";
import CertDetail from "./CertDetail";
import TextField from '@material-ui/core/TextField';

import Gallary from './Gallary'
const initialState = {
  cert: "",
  certError: "",
  filteredData: [],
  newdata:[]
};

export default class ValiationForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  handleChange = (event) => {
    this.setState({
      cert: event.target.value,
    });
  };

  

  validate = () => {
    let certError = "";
    if (!this.state.cert) {
      certError = "Serial Number cannot be blank";
    } else if (this.state.cert < 10000001 || this.state.cert > (10000000 + this.props.data.length)) {
      certError = "Please type in a valid Serial Number";
    }
    
    if (certError) {
      this.setState({ certError });
      return false;
    }
    return true;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      //console.log("The filtered data",this.state.filteredData);
      
      // clear form
      this.setState({
      cert: "", 
      certError: "", 
      filteredData: [], 
      newdata: this.state.filteredData});
      document.getElementById("form").style.display = "block";
    }
  };

  handleSearch = (event) => {
    const cert = this.state.cert;
    const data = this.props.data;
    //console.log("Data from handlechange", data);
    this.setState({
      filteredData: data.filter((x) => x.Serial.includes(cert)),
    });
    
  };
  
  render() {    
   // console.log("hey now",this.state.filteredData)
    // const len = this.props.data.length;
    const val = 8 -this.state.cert.length ;
    return (
      <div style={{textAlign:'center'}}>
        <h1 onClick={()=>  window.location.reload(true)} style={{cursor: 'pointer'}}>Cert Search for Certificate of Conformance</h1>
        <Gallary/>
        <form onSubmit={this.handleSubmit} id="form">
          <div>
            {/* <input
              type="number" 
               //min="10000001" 
              //max="10000099"   
              maxLength="10"
              placeholder="Please enter a Serial Number (########)"
              value={this.state.cert}
              onChange={this.handleChange}
            /> */}
            <TextField 
            type="number" style={{width:'30%'}}
            id="outlined-basic" 
            label="Please enter a Serial Number (########)" variant="outlined"
            value={this.state.cert}
            onChange={this.handleChange}  />

            <div style={{ padding: "8px" }}>
            {this.state.cert.length && this.state.cert.length < 9? val + " digits remanining" : null} 
            </div>

             <div style={{ color: "red", padding: "5px" }}>
             {this.state.cert.length > 8? "Serial number must be less than 9 digits" : null}
            </div>
            
            <div style={{ color: "red", padding: "5px" }}>
              {this.state.certError}
            </div>
          </div>
          <button 
          //disabled={!this.state.cert} 
          type="submit" onClick={this.handleSearch}>
            Submit
          </button>
          
        </form>
        {/* <ul>
           <h3>{this.state.newdata.map(x=> (
             <div key={x.Serial}>
           <p>{x.Serial}</p>
           <p>{x.SN}</p>
           <p>{x.Fabricator}</p>
           </div>
           ))}</h3> 
           </ul> */}

           {/* <img src="https://images-na.ssl-images-amazon.com/images/I/71iHCT8cx5L._SL1500_.jpg" style={{height:'300px', margin:'20px'}}/> */}
          
            {this.state.newdata.map((cert) => (
           <CertDetail key={cert.Serial} cert ={cert}/>
           ))} 

           
      </div>
    );
  }
}
