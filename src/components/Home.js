import React, { useState } from "react";
import './../App.css';
import CertDetail from './CertDetail'


function Test(props) {
  const [search, setSearch] = useState("");
  const [filtereddata, setFilteredData] = useState([]);
   const [certError] = useState("Please enter a valid Serial Number");

 

 function handleChange (e) {  
  setSearch(e.target.value);
  }

const data = props.data;

  const onSearch = () => {          
    setFilteredData(
      data.filter(cert =>
        cert.Serial.includes(search)
      )
    );
  };

  return (
    <div className="App">
      <h1>Cert Search for Certificate of Conformance</h1>
      <input
        type="number" name="cert" min="10000001" max="100000020"   
      style={{height: '35px', margin: '5px', width:'300px'}}
        placeholder="Enter the Serial Number (Eg: 10000001)"
        onChange={handleChange} value={search}
      />
      {!search || search < 10000000 || search > 10000025 ?<p style={{color:'grey', fontSize:'14px'}}>{certError}</p> : null} 
      
      <br/>
      <button  
      disabled={!search || search < 10000001 || search > 10000025} 
      onClick={onSearch} style={{ backgroundColor:'#02192D',  border:'none', color:'white', height:'40px', fontFamily:'Poppins', fontSize:'20px'}}>Search</button>

      {filtereddata.map((cert) => (
        <CertDetail key={cert.Serial} cert ={cert} />
      ))} 

      
        {/* {filtereddata.map((cert, Serial) => (
        <Certificate key={Serial} {...cert} />
      ))}   */}
      
                  
    </div>
  );
}




export default Test