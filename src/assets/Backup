import React, { useState, useEffect } from "react";
import Sheet from './TestData.json'
import './../App.css';
import CertDetail from './CertDetail'
import Tabletop from 'tabletop';


function Test() {
  const [search, setSearch] = useState("");
  const [filtereddata, setFilteredData] = useState([]);
   const [certError] = useState("Please enter a valid Serial Number");
 
   
  useEffect(() => {
    // Update the document title using the browser API
    Tabletop.init({
      key: '1uC0pB_Ku_UIH0HfuA2DU_qm-gRdzO3aONHZE3OwxsFQ',
      callback: showInfo,
      simpleSheet: true
    })
  });
  
  function showInfo(data, tabletop) {
    JSON.stringify(data, null, 2);
    const certs = data;
    console.log(certs);
  }

 function handleChange (e) {  
  setSearch(e.target.value);
  }

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
        type="number" name="cert" min="10000001" max="100000020"   
      style={{height: '35px', margin: '5px', width:'300px'}}
        placeholder="Enter the Serial Number (Eg: 10000001)"
        onChange={handleChange} value={search}
      />
      {!search || search < 10000000 || search > 100000022 ?<p style={{color:'grey', fontSize:'14px'}}>{certError}</p> : null} 
      
      <br/>
      <button  disabled={!search || search < 10000000 || search > 10000020} onClick={onSearch} style={{ backgroundColor:'#02192D',  border:'none', color:'white', height:'40px', fontFamily:'Poppins', fontSize:'20px'}}>Search</button>

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