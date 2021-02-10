import React, { useState, useEffect } from "react";
import Tabletop from "tabletop";
import Home from "./components/Home";
import axios from 'axios'

const App = () => {
  const [data, setData] = useState()
  
  const fetchCerts = async () => {
    let response = await axios.get('/serialnombre')
    console.log(response.data)
  }
  // Return array of data from database request
  useEffect(() => {
    Tabletop.init({
      key: "1uC0pB_Ku_UIH0HfuA2DU_qm-gRdzO3aONHZE3OwxsFQ",
      callback: (googleData) => {
        setData(googleData)
      },
      simpleSheet: true,
    });
    
  }, [])

  return (
    <>
      <Home data={data} />
      <button onClick={fetchCerts} />
    </>
  )
}


export default App;
