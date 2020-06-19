import React, { useState } from "react";
import './../App.css';
import CertDetail from './CertDetail'


function Test(props) {
  const [search, setSearch] = useState("");
  const [filtereddata, setFilteredData] = useState([]);
   const [certError, setcertError] = useState("");

 

 function handleChange (e) {  
  setSearch(e.target.value);
  }

const data = props.data;

const validate = () => {  
  if (!search) {
    setcertError({certError: "Serial Number cannot be blank"})
  }    
  else if (search.length < 8 ||  search.length > 9) {
    setcertError({certError: "Please type in a correct Serial Number"})
  } 
  if(certError){
    return certError
  }

  return true;
};
  const onSearch = () => {   
    const isValid = validate();    
    if (isValid) {
      
    setFilteredData(
      data.filter(cert =>
        cert.Serial.includes(search)
      )
    );
  };
  }
  return (
    <div className="App">
      <h1>Cert Search for Certificate of Conformance</h1>      
      <input
        type="number" name="cert" min="10000001" max="100000020" 
        placeholder="Enter the Serial Number (Eg: 10000001)"
        onChange={handleChange} value={search}
      />     
       <div style={{color: "red" , padding:'10px'}}>
            {certError}
          </div>
         
      <br/>
      <button
      onClick={onSearch} 
      >Search</button>

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