import React from "react";
import "./../App.css";
import CertDetail from "./CertDetail";

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
    } else if (this.state.cert.length < 8 || this.state.cert > 10000099) {
      certError = "Please type in a correct Serial Number";
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
      this.setState({cert: "", certError: "", filteredData: [], newdata: this.state.filteredData});
      document.getElementById("form").style.display = "none";
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
    return (
      <div className="App">
        <h1>Cert Search for Certificate of Assurance</h1>
       
        <form onSubmit={this.handleSubmit} id="form">
          <div>
            <input
              type="number" 
              // min="10000001" 
              //max="10000099"   
              placeholder="Please enter a Serial Number"
              value={this.state.cert}
              onChange={this.handleChange}
            />
            <div style={{ color: "red", padding: "10px" }}>
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
            {this.state.newdata.map((cert) => (
           <CertDetail key={cert.Serial} cert ={cert}/>
           ))} 
      </div>
    );
  }
}
