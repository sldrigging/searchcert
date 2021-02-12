import React, { useState } from 'react'
import axios from 'axios'

function AddCertificate() {
  const initialState = {
    serial: "",
    manufacturer: "",
    part: "",
    name: "",
    vertical: "",
    choke: "",
    verticalB: "",
    fabricator: "",
    date: "",
    width: "",
    length: "",
    ply: "",
    basket: "",
    lining: "",
    eyeType: "",
    description: ""
  }
  const [inputs, setInputs] = useState(initialState)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const cert = inputs
    setInputs(initialState)
    await axios.post('/thortex', cert)
    setInputs(initialState)
  }
  const handleChange = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value})
  }
  return(
    <>
    <form>
      <input type="text" value={inputs.serial} placeholder="Serial Number" name="serial" onChange={handleChange}/>
      <input type="text" value={inputs.manufacturer} placeholder="Manufacturer" name="manufacturer" onChange={handleChange}/>
      <input type="text" value={inputs.part} placeholder="Part" name="part" onChange={handleChange}/>
      <input type="text" value={inputs.name} placeholder="name" name="name" onChange={handleChange}/>
      <input type="text" value={inputs.vertical} placeholder="vertical" name="vertical" onChange={handleChange}/>
      <input type="text" value={inputs.choke} placeholder="choke" name="choke" onChange={handleChange}/>
      <input type="text" value={inputs.verticalB} placeholder="verticalB" name="verticalB" onChange={handleChange}/>
      <input type="text" value={inputs.fabricator} placeholder="fabricator" name="fabricator" onChange={handleChange}/>
      <input type="text" value={inputs.date} placeholder="date" name="date" onChange={handleChange}/>
      <input type="text" value={inputs.width} placeholder="width" name="width" onChange={handleChange}/>
      <input type="text" value={inputs.length} placeholder="length" name="length" onChange={handleChange}/>
      <input type="text" value={inputs.ply} placeholder="ply" name="ply" onChange={handleChange}/>
      <input type="text" value={inputs.basket} placeholder="basket" name="basket" onChange={handleChange}/>
      <input type="text" value={inputs.lining} placeholder="lining" name="lining" onChange={handleChange}/>
      <input type="text" value={inputs.eyeType} placeholder="eyeType" name="eyeType" onChange={handleChange}/>
      <input type="text" value={inputs.description} placeholder="description" name="description" onChange={handleChange}/>
      <button onClick={handleSubmit}>Submit</button>
    </form>
    </>
  )
}

export default AddCertificate