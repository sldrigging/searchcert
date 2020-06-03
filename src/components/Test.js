import React, { useState } from "react";
import Sheet from './TestData.json'
import './../App.css';
import CertDetail from './CertDetail'
import MyDocument from './Pdf'

function Test() {
  const [search, setSearch] = useState("");
  const [filtereddata, setFilteredData] = useState([]);

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
        type="text"
        placeholder="Serial Number"
        onChange={e => setSearch(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
      {filtereddata.map((cert, Serial) => (
        <CertDetail key={Serial} {...cert} />
      ))}
      
    </div>
  );
}



export default Test