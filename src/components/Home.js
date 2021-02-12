import React, { useState } from "react";
import "./../App.css";
import CertDetail from "./CertDetail";
import TextField from "@material-ui/core/TextField";
import Gallary from "./Gallary";
import axios from 'axios'
import AddCertificate from "./AddCertificate";

function ValidationForm({ data }) {
  const [cert, setCert] = useState("");
  const [certError, setCertError] = useState("");
  const [newData, setNewData] = useState([]);
  const [certificate, setCertificate] = useState(null)

  const handleChange = (e) => {
    setCert(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault()
    let response = await axios.get(`/thortex/${cert}`)
    setCertificate(response.data[0])
    if (response.data.length === 0) {
      setCertError("Invalid Serial Number")
    }
  };

  const val = 8 - cert.length;
  return (
    <div style={{ textAlign: "center" }}>
      <Gallary />
      <form id="form">
        <div>
          <TextField
            type="number"
            style={{ width: "30%" }}
            id="outlined-basic"
            label="Please enter a Serial Number (########)"
            variant="outlined"
            value={cert}
            onChange={handleChange}
          />

          <div style={{ padding: "8px" }}>
            {cert.length && cert.length < 9 ? val + " digits remanining" : null}
          </div>

          <div style={{ color: "red", padding: "5px" }}>
            {cert.length > 8
              ? "Serial number must be less than 9 digits"
              : null}
          </div>

          <div style={{ color: "red", padding: "5px" }}>{certError}</div>
        </div>
        <button type="submit" onClick={handleSearch}>
          Submit
        </button>
      </form>
              
      {certificate && <CertDetail cert={certificate} />}
      
      <AddCertificate />
    </div>
  );
}

export default ValidationForm;
