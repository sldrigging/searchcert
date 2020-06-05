import React, { useState, useEffect } from "react";
import Sheet from './TestData.json'
import './../App.css';
import CertDetail from './CertDetail'
import Certificate from './Certificate'
import Tabletop from 'tabletop';

function Test() {
  const [search, setSearch] = useState("");
  const [filtereddata, setFilteredData] = useState([]);
  // const [cert, setcert] = useState([]);
  
  useEffect(() => {
    // Update the document title using the browser API
    Tabletop.init({
      key: '1yWA49aKE3vSi4C0p7G1Z6CFBoJocEPPJOI1g0whdsyI',
      callback: googleData => {
        console.log('google sheet data --->', googleData);
      },
      simpleSheet: true
    })
  });
  
 
const data = Sheet;
  const onSearch = () => {       
    setFilteredData(
      data.filter(cert =>
        cert.Serial.includes(search)
      )
    );
  };

  return (
    <div className="App">
      <h1>Cert Search for Certificate of Assurance</h1>
      <input
        type="number" name="cert" min="10000001" max="100000020"  minLength={9}
      style={{height: '35px', margin: '5px', width:'300px'}}
        placeholder="Enter the Serial Number (Eg: 10000001)"
        onChange={e => setSearch(e.target.value)}
      />
      <br/>
      <button onClick={onSearch} style={{ backgroundColor:'#02192D',  border:'none', color:'white', height:'40px', fontFamily:'Poppins', fontSize:'20px'}}>Search</button>
      {filtereddata.map((cert, Serial) => (
        <CertDetail key={Serial} {...cert} />
      ))} 
       {filtereddata.map((cert, Serial) => (
        <Certificate key={Serial} {...cert} />
      ))}   
      
                  
    </div>
  );
}




export default Test