import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import axios from 'axios'

const App = () => {
  const [data, setData] = useState()
  
  // Return array of data from database request
  // useEffect(() => {
  //   const fetchCerts = async () => {
  //     let response = await axios.get('/thortex')
  //     let certificates = response.data
  //     setData(certificates)
  //   }
  //   fetchCerts()

  // }, [])

  return (
    <>
      <Home data={data} />
    </>
  )
}

export default App;
