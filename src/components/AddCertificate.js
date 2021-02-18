import React, { useState, useEffect } from "react";
import axios from "axios";
// import ReactHTMLDatalist from "react-html-datalist";
import Select from 'react-select'

function AddCertificate() {

  const initialState = {
    serial: "",
    manufacturer: "",
    part: "",
    name: "",
    vertical: "",
    choke: "",
    basket: "",
    fabricator: "",
    date: "",
    width: "",
    length: "",
    ply: "",
    basket: "",
    lining: "",
    eyeType: "",
    description: "",
  };

  const optionsArr = [
    {
      label: "1 x 2, 1 ply, Unlined, Flat Eye",
      value: 91210005,
    },
    {
      label: "1 x 3, 1 ply, Unlined, Flat Eye",
      value: 91210010,
    },
    {
      label: "1 x 4, 1 ply, Unlined, Flat Eye",
      value: 91210015,
    },
    {
      label: "1 x 6, 1 ply, Unlined, Flat Eye",
      value: 91210020,
    },
    {
      label: "1 x 8, 1 ply, Unlined, Flat Eye",
      value: 91210025,
    },
    {
      label: "1 x 10, 1 ply, Unlined, Flat Eye",
      value: 91210030,
    },
    {
      label: "2 x 4, 1 ply, Unlined, Flat Eye",
      value: 91211005,
    },
    {
      label: "2 x 6, 1 ply, Unlined, Flat Eye",
      value: 91211010,
    },
    {
      label: "2 x 8, 1 ply, Unlined, Flat Eye",
      value: 91211015,
    },
    {
      label: "2 x 10, 1 ply, Unlined, Flat Eye",
      value: 91211020,
    },
    {
      label: "2 x 12, 1 ply, Unlined, Flat Eye",
      value: 91211025,
    },
    {
      label: "2 x 16, 1 ply, Unlined, Flat Eye",
      value: 91211030,
    },
    {
      label: "2 x 20, 1 ply, Unlined, Flat Eye",
      value: 91211035,
    },
    {
      label: "3 x 6, 1 ply, Unlined, Tapered Eye",
      value: 91212005,
    },
    {
      label: "3 x 8, 1 ply, Unlined, Tapered Eye",
      value: 91212010,
    },
    {
      label: "3 x 10, 1 ply, Unlined, Tapered Eye",
      value: 91212015,
    },
    {
      label: "3 x 12, 1 ply, Unlined, Tapered Eye",
      value: 91212020,
    },
    {
      label: "3 x 20, 1 ply, Unlined, Tapered Eye",
      value: 91212025,
    },
    {
      label: "4 x 8, 1 ply, Unlined, Tapered Eye",
      value: 91213005,
    },
    {
      label: "4 x 10, 1 ply, Unlined, Tapered Eye",
      value: 91213010,
    },
    {
      label: "4 x 15, 1 ply, Unlined, Tapered Eye",
      value: 91213015,
    },
    {
      label: "4 x 20, 1 ply, Unlined, Tapered Eye",
      value: 91213020,
    },
    {
      label: "1 x 2, 1 ply, Lined, Flat Eye",
      value: 91214005,
    },
    {
      label: "1 x 3, 1 ply, Lined, Flat Eye",
      value: 91214010,
    },
    {
      label: "1 x 4, 1 ply, Lined, Flat Eye",
      value: 91214015,
    },
    {
      label: "1 x 6, 1 ply, Lined, Flat Eye",
      value: 91214020,
    },
    {
      label: "1 x 8, 1 ply, Lined, Flat Eye",
      value: 91214025,
    },
    {
      label: "1 x 10, 1 ply, Lined, Flat Eye",
      value: 91214030,
    },
    {
      label: "2 x 4, 1 ply, Lined, Flat Eye",
      value: 91215005,
    },
    {
      label: "2 x 6, 1 ply, Lined, Flat Eye",
      value: 91215010,
    },
    {
      label: "2 x 8, 1 ply, Lined, Flat Eye",
      value: 91215015,
    },
    {
      label: "2 x 10, 1 ply, Lined, Flat Eye",
      value: 91215020,
    },
    {
      label: "2 x 12, 1 ply, Lined, Flat Eye",
      value: 91215025,
    },
    {
      label: "2 x 16, 1 ply, Lined, Flat Eye",
      value: 91215030,
    },
    {
      label: "2 x 20, 1 ply, Lined, Flat Eye",
      value: 91215035,
    },
    {
      label: "3 x 6, 1 ply, Lined, Tapered Eye",
      value: 91216005,
    },
    {
      label: "3 x 8, 1 ply, Lined, Tapered Eye",
      value: 91216010,
    },
    {
      label: "3 x 10, 1 ply, Lined, Tapered Eye",
      value: 91216015,
    },
    {
      label: "3 x 12, 1 ply, Lined, Tapered Eye",
      value: 91216020,
    },
    {
      label: "3 x 20, 1 ply, Lined, Tapered Eye",
      value: 91216025,
    },
    {
      label: "4 x 8, 1 ply, Lined, Tapered Eye",
      value: 91217005,
    },
    {
      label: "4 x 10, 1 ply, Lined, Tapered Eye",
      value: 91217010,
    },
    {
      label: "4 x 15, 1 ply, Lined, Tapered Eye",
      value: 91217015,
    },
    {
      label: "4 x 20, 1 ply, Lined, Tapered Eye",
      value: 91217020,
    },
    {
      label: "1 x 2, 2 ply, Unlined, Flat Eye",
      value: 91218005,
    },
    {
      label: "1 x 3, 2 ply, Unlined, Flat Eye",
      value: 91218010,
    },
    {
      label: "1 x 4, 2 ply, Unlined, Flat Eye",
      value: 91218015,
    },
    {
      label: "1 x 6, 2 ply, Unlined, Flat Eye",
      value: 91218020,
    },
    {
      label: "1 x 8, 2 ply, Unlined, Flat Eye",
      value: 91218025,
    },
    {
      label: "1 x 10, 2 ply, Unlined, Flat Eye",
      value: 91218030,
    },
    {
      label: "2 x 4, 2 ply, Unlined, Flat Eye",
      value: 91219005,
    },
    {
      label: "2 x 6, 2 ply, Unlined, Flat Eye",
      value: 91219010,
    },
    {
      label: "2 x 8, 2 ply, Unlined, Flat Eye",
      value: 91219015,
    },
    {
      label: "2 x 10, 2 ply, Unlined, Flat Eye",
      value: 91219020,
    },
    {
      label: "2 x 12, 2 ply, Unlined, Flat Eye",
      value: 91219025,
    },
    {
      label: "2 x 16, 2 ply, Unlined, Flat Eye",
      value: 91219030,
    },
    {
      label: "2 x 20, 2 ply, Unlined, Flat Eye",
      value: 91219035,
    },
    {
      label: "3 x 6, 2 ply, Unlined, Tapered Eye",
      value: 91220005,
    },
    {
      label: "3 x 8, 2 ply, Unlined, Tapered Eye",
      value: 91220010,
    },
    {
      label: "3 x 10, 2 ply, Unlined, Tapered Eye",
      value: 91220015,
    },
    {
      label: "3 x 12, 2 ply, Unlined, Tapered Eye",
      value: 91220020,
    },
    {
      label: "3 x 20, 2 ply, Unlined, Tapered Eye",
      value: 91220025,
    },
    {
      label: "4 x 8, 2 ply, Unlined, Tapered Eye",
      value: 91221005,
    },
    {
      label: "4 x 10, 2 ply, Unlined, Tapered Eye",
      value: 91221010,
    },
    {
      label: "4 x 15, 2 ply, Unlined, Tapered Eye",
      value: 91221015,
    },
    {
      label: "4 x 20, 2 ply, Unlined, Tapered Eye",
      value: 91221020,
    },
    {
      label: "1 x 2, 2 ply, Lined, Flat Eye",
      value: 91222005,
    },
    {
      label: "1 x 3, 2 ply, Lined, Flat Eye",
      value: 91222010,
    },
    {
      label: "1 x 4, 2 ply, Lined, Flat Eye",
      value: 91222015,
    },
    {
      label: "1 x 6, 2 ply, Lined, Flat Eye",
      value: 91222020,
    },
    {
      label: "1 x 8, 2 ply, Lined, Flat Eye",
      value: 91222025,
    },
    {
      label: "1 x 10, 2 ply, Lined, Flat Eye",
      value: 91222030,
    },
    {
      label: "2 x 4, 2 ply, Lined, Flat Eye",
      value: 91223005,
    },
    {
      label: "2 x 6, 2 ply, Lined, Flat Eye",
      value: 91223010,
    },
    {
      label: "2 x 8, 2 ply, Lined, Flat Eye",
      value: 91223015,
    },
    {
      label: "2 x 10, 2 ply, Lined, Flat Eye",
      value: 91223020,
    },
    {
      label: "2 x 12, 2 ply, Lined, Flat Eye",
      value: 91223025,
    },
    {
      label: "2 x 16, 2 ply, Lined, Flat Eye",
      value: 91223030,
    },
    {
      label: "2 x 20, 2 ply, Lined, Flat Eye",
      value: 91223035,
    },
    {
      label: "3 x 6, 2 ply, Lined, Tapered Eye",
      value: 91224005,
    },
    {
      label: "3 x 8, 2 ply, Lined, Tapered Eye",
      value: 91224010,
    },
    {
      label: "3 x 10, 2 ply, Lined, Tapered Eye",
      value: 91224015,
    },
    {
      label: "3 x 12, 2 ply, Lined, Tapered Eye",
      value: 91224020,
    },
    {
      label: "3 x 20, 2 ply, Lined, Tapered Eye",
      value: 91224025,
    },
    {
      label: "4 x 8, 2 ply, Lined, Tapered Eye",
      value: 91225005,
    },
    {
      label: "4 x 10, 2 ply, Lined, Tapered Eye",
      value: 91225010,
    },
    {
      label: "4 x 15, 2 ply, Lined, Tapered Eye",
      value: 91225015,
    },
    {
      label: "4 x 20, 2 ply, Lined, Tapered Eye",
      value: 91225020,
    },
    {
      label: "1 x 2, 1 ply, Unlined, Twisted Eye",
      value: 91226005,
    },
    {
      label: "1 x 3, 1 ply, Unlined, Twisted Eye",
      value: 91226010,
    },
    {
      label: "1 x 4, 1 ply, Unlined, Twisted Eye",
      value: 91226015,
    },
    {
      label: "1 x 6, 1 ply, Unlined, Twisted Eye",
      value: 91226020,
    },
    {
      label: "1 x 8, 1 ply, Unlined, Twisted Eye",
      value: 91226025,
    },
    {
      label: "1 x 10, 1 ply, Unlined, Twisted Eye",
      value: 91226030,
    },
    {
      label: "2 x 4, 1 ply, Unlined, Twisted Eye",
      value: 91227005,
    },
    {
      label: "2 x 6, 1 ply, Unlined, Twisted Eye",
      value: 91227010,
    },
    {
      label: "2 x 8, 1 ply, Unlined, Twisted Eye",
      value: 91227015,
    },
    {
      label: "2 x 10, 1 ply, Unlined, Twisted Eye",
      value: 91227020,
    },
    {
      label: "2 x 12, 1 ply, Unlined, Twisted Eye",
      value: 91227025,
    },
    {
      label: "2 x 16, 1 ply, Unlined, Twisted Eye",
      value: 91227030,
    },
    {
      label: "2 x 20, 1 ply, Unlined, Twisted Eye",
      value: 91227035,
    },
    {
      label: "3 x 6, 1 ply, Unlined, Twisted tapered Eye",
      value: 91228005,
    },
    {
      label: "3 x 8, 1 ply, Unlined, Twisted tapered Eye",
      value: 91228010,
    },
    {
      label: "3 x 10, 1 ply, Unlined, Twisted tapered Eye",
      value: 91228015,
    },
    {
      label: "3 x 12, 1 ply, Unlined, Twisted tapered Eye",
      value: 91228020,
    },
    {
      label: "3 x 20, 1 ply, Unlined, Twisted tapered Eye",
      value: 91228025,
    },
    {
      label: "4 x 8, 1 ply, Unlined, Twisted tapered Eye",
      value: 91229005,
    },
    {
      label: "4 x 10, 1 ply, Unlined, Twisted tapered Eye",
      value: 91229010,
    },
    {
      label: "4 x 15, 1 ply, Unlined, Twisted tapered Eye",
      value: 91229015,
    },
    {
      label: "4 x 20, 1 ply, Unlined, Twisted tapered Eye",
      value: 91229020,
    },
    {
      label: "1 x 2, 2 ply, Unlined, Twisted Eye",
      value: 91230005,
    },
    {
      label: "1 x 3, 2 ply, Unlined, Twisted Eye",
      value: 91230010,
    },
    {
      label: "1 x 4, 2 ply, Unlined, Twisted Eye",
      value: 91230015,
    },
    {
      label: "1 x 6, 2 ply, Unlined, Twisted Eye",
      value: 91230020,
    },
    {
      label: "1 x 8, 2 ply, Unlined, Twisted Eye",
      value: 91230025,
    },
    {
      label: "1 x 10, 2 ply, Unlined, Twisted Eye",
      value: 91230030,
    },
    {
      label: "2 x 4, 2 ply, Unlined, Twisted Eye",
      value: 91231005,
    },
    {
      label: "2 x 6, 2 ply, Unlined, Twisted Eye",
      value: 91231010,
    },
    {
      label: "2 x 8, 2 ply, Unlined, Twisted Eye",
      value: 91231015,
    },
    {
      label: "2 x 10, 2 ply, Unlined, Twisted Eye",
      value: 91231020,
    },
    {
      label: "2 x 12, 2 ply, Unlined, Twisted Eye",
      value: 91231025,
    },
    {
      label: "2 x 16, 2 ply, Unlined, Twisted Eye",
      value: 91231030,
    },
    {
      label: "2 x 20, 2 ply, Unlined, Twisted Eye",
      value: 91231035,
    },
    {
      label: "3 x 6, 2 ply, Unlined, Twisted tapered Eye",
      value: 91232005,
    },
    {
      label: "3 x 8, 2 ply, Unlined, Twisted tapered Eye",
      value: 91232010,
    },
    {
      label: "3 x 10, 2 ply, Unlined, Twisted tapered Eye",
      value: 91232015,
    },
    {
      label: "3 x 12, 2 ply, Unlined, Twisted tapered Eye",
      value: 91232020,
    },
    {
      label: "3 x 20, 2 ply, Unlined, Twisted tapered Eye",
      value: 91232025,
    },
    {
      label: "4 x 8, 2 ply, Unlined, Twisted tapered Eye",
      value: 91233005,
    },
    {
      label: "4 x 10, 2 ply, Unlined, Twisted tapered Eye",
      value: 91233010,
    },
    {
      label: "4 x 15, 2 ply, Unlined, Twisted tapered Eye",
      value: 91233015,
    },
    {
      label: "4 x 20, 2 ply, Unlined, Twisted tapered Eye",
      value: 91233020,
    },
  ];

  const [detail, setDetail] = useState({ part_id: "" });
  const [inputs, setInputs] = useState(initialState);
  const [serialPrefix, setSerialPrefix] = useState("")
  const [lastSerial, setLastSerial] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [printerLine, setPrinterLine] = useState("")

  const handleSelect = (selectedOption) => {
    if(selectedOption !== null) {
      setDetail({part_id: selectedOption.value})
    }
  }

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const clear = () => {
    setInputs(initialState)
    setPrinterLine("")
    setSerialPrefix("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // If qty > 1
     // Submit certification
     // Increment the Serial number
     // Submit another certification
     // set last serial number
     // repeat until amount so submissions equals qty set
    const cert = inputs;
    setLastSerial(cert.serial)
    setInputs(initialState);
    await axios.post("/thortex", cert);
    setInputs(initialState);
  };

    useEffect(() => {
      if(detail.part_id) {
        axios.get(`/thortex/parts/${detail.part_id}`).then(res => {
          let data = res.data
          setInputs({...inputs, ...data, manufacturer: "Thor-tex USA"})
          setSerialPrefix(data.serialPrefix)
          setPrinterLine(data.printerLine)
        })

        axios.get('/lastSerial').then(res => {
          setLastSerial(res.data.serial)
        })
      }
    },[detail.part_id])

  return (
    <>
      <Select 
        options={optionsArr}
        isClearable
        onChange={handleSelect}
      />
      
      <p>Serial Prefix: {serialPrefix && serialPrefix}</p>
      <p>Last Serial: {lastSerial && lastSerial}</p>
      <p>Printer Line: {printerLine}</p>
      <form>
        <input
          type="text"
          value={inputs.date}
          placeholder="date"
          name="date"
          onChange={handleChange}
        />
        <input
          type="text"
          value={inputs.fabricator}
          placeholder="fabricator"
          name="fabricator"
          onChange={handleChange}
        />
        <input
          type="text"
          value={inputs.serial}
          placeholder="Serial Number"
          name="serial"
          onChange={handleChange}
        />

        <input
          type="text"
          value={inputs.manufacturer}
          placeholder="Manufacturer"
          name="manufacturer"
          onChange={handleChange}
        />
        <input
          type="text"
          value={inputs.part}
          placeholder="Part"
          name="part"
          onChange={handleChange}
        />
        <input
          type="text"
          value={inputs.name}
          placeholder="name"
          name="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={inputs.vertical}
          placeholder="vertical"
          name="vertical"
          onChange={handleChange}
        />
        <input
          type="text"
          value={inputs.choke}
          placeholder="choke"
          name="choke"
          onChange={handleChange}
        />
        <input
          type="text"
          value={inputs.basket}
          placeholder="verticalB"
          name="basket"
          onChange={handleChange}
        />
        <input
          type="text"
          value={inputs.width}
          placeholder="width"
          name="width"
          onChange={handleChange}
        />
        <input
          type="text"
          value={inputs.length}
          placeholder="length"
          name="length"
          onChange={handleChange}
        />
        <input
          type="text"
          value={inputs.ply}
          placeholder="ply"
          name="ply"
          onChange={handleChange}
        />
        <input
          type="text"
          value={inputs.lining}
          placeholder="lining"
          name="lining"
          onChange={handleChange}
        />
        <input
          type="text"
          value={inputs.eyeType}
          placeholder="eyeType"
          name="eyeType"
          onChange={handleChange}
        />
        <input
          type="text"
          value={inputs.description}
          placeholder="description"
          name="description"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Submit</button>        
      </form>
      <button onClick={clear}>Clear</button>
      <label>Quantity:</label><input type="text" name="qty" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
    </>
  );
}

export default AddCertificate;

// Operator enters 4 inputs Date / Name / Part # (Dropdown/Text) / Serial number x
// Rework form to only contain 4 fields, automatically fill out other fields on select  x 
// All products exist in collection in DB x
// Add products to database x
// Gets the last serial number and displays last serial number x
// Last serial number renders to the page x
// Serial number prefix is associated with a specific label type 10 (big label) or 11 (small label)
// Serial number prefix is selected client side? x
// Part number is associated with specific product type autofills remaining data when selected or entered x
// Create dropdown that can also be typed in selects part number from database of parts x
// Associated with product printer display line to easily select for printing
// Field shows with printer database line number
//

// Additional routes with same logic for more product lines
// Process will be done again for additional products
