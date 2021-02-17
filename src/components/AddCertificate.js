import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactHTMLDatalist from "react-html-datalist";

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
    description: "",
  };

  const optionsArr = [
    {
      text: "1 x 2, 1 ply, Unlined, Flat Eye",
      value: 91210005,
    },
    {
      text: "1 x 3, 1 ply, Unlined, Flat Eye",
      value: 91210010,
    },
    {
      text: "1 x 4, 1 ply, Unlined, Flat Eye",
      value: 91210015,
    },
    {
      text: "1 x 6, 1 ply, Unlined, Flat Eye",
      value: 91210020,
    },
    {
      text: "1 x 8, 1 ply, Unlined, Flat Eye",
      value: 91210025,
    },
    {
      text: "1 x 10, 1 ply, Unlined, Flat Eye",
      value: 91210030,
    },
    {
      text: "2 x 4, 1 ply, Unlined, Flat Eye",
      value: 91211005,
    },
    {
      text: "2 x 6, 1 ply, Unlined, Flat Eye",
      value: 91211010,
    },
    {
      text: "2 x 8, 1 ply, Unlined, Flat Eye",
      value: 91211015,
    },
    {
      text: "2 x 10, 1 ply, Unlined, Flat Eye",
      value: 91211020,
    },
    {
      text: "2 x 12, 1 ply, Unlined, Flat Eye",
      value: 91211025,
    },
    {
      text: "2 x 16, 1 ply, Unlined, Flat Eye",
      value: 91211030,
    },
    {
      text: "2 x 20, 1 ply, Unlined, Flat Eye",
      value: 91211035,
    },
    {
      text: "3 x 6, 1 ply, Unlined, Tapered Eye",
      value: 91212005,
    },
    {
      text: "3 x 8, 1 ply, Unlined, Tapered Eye",
      value: 91212010,
    },
    {
      text: "3 x 10, 1 ply, Unlined, Tapered Eye",
      value: 91212015,
    },
    {
      text: "3 x 12, 1 ply, Unlined, Tapered Eye",
      value: 91212020,
    },
    {
      text: "3 x 20, 1 ply, Unlined, Tapered Eye",
      value: 91212025,
    },
    {
      text: "4 x 8, 1 ply, Unlined, Tapered Eye",
      value: 91213005,
    },
    {
      text: "4 x 10, 1 ply, Unlined, Tapered Eye",
      value: 91213010,
    },
    {
      text: "4 x 15, 1 ply, Unlined, Tapered Eye",
      value: 91213015,
    },
    {
      text: "4 x 20, 1 ply, Unlined, Tapered Eye",
      value: 91213020,
    },
    {
      text: "1 x 2, 1 ply, Lined, Flat Eye",
      value: 91214005,
    },
    {
      text: "1 x 3, 1 ply, Lined, Flat Eye",
      value: 91214010,
    },
    {
      text: "1 x 4, 1 ply, Lined, Flat Eye",
      value: 91214015,
    },
    {
      text: "1 x 6, 1 ply, Lined, Flat Eye",
      value: 91214020,
    },
    {
      text: "1 x 8, 1 ply, Lined, Flat Eye",
      value: 91214025,
    },
    {
      text: "1 x 10, 1 ply, Lined, Flat Eye",
      value: 91214030,
    },
    {
      text: "2 x 4, 1 ply, Lined, Flat Eye",
      value: 91215005,
    },
    {
      text: "2 x 6, 1 ply, Lined, Flat Eye",
      value: 91215010,
    },
    {
      text: "2 x 8, 1 ply, Lined, Flat Eye",
      value: 91215015,
    },
    {
      text: "2 x 10, 1 ply, Lined, Flat Eye",
      value: 91215020,
    },
    {
      text: "2 x 12, 1 ply, Lined, Flat Eye",
      value: 91215025,
    },
    {
      text: "2 x 16, 1 ply, Lined, Flat Eye",
      value: 91215030,
    },
    {
      text: "2 x 20, 1 ply, Lined, Flat Eye",
      value: 91215035,
    },
    {
      text: "3 x 6, 1 ply, Lined, Tapered Eye",
      value: 91216005,
    },
    {
      text: "3 x 8, 1 ply, Lined, Tapered Eye",
      value: 91216010,
    },
    {
      text: "3 x 10, 1 ply, Lined, Tapered Eye",
      value: 91216015,
    },
    {
      text: "3 x 12, 1 ply, Lined, Tapered Eye",
      value: 91216020,
    },
    {
      text: "3 x 20, 1 ply, Lined, Tapered Eye",
      value: 91216025,
    },
    {
      text: "4 x 8, 1 ply, Lined, Tapered Eye",
      value: 91217005,
    },
    {
      text: "4 x 10, 1 ply, Lined, Tapered Eye",
      value: 91217010,
    },
    {
      text: "4 x 15, 1 ply, Lined, Tapered Eye",
      value: 91217015,
    },
    {
      text: "4 x 20, 1 ply, Lined, Tapered Eye",
      value: 91217020,
    },
    {
      text: "1 x 2, 2 ply, Unlined, Flat Eye",
      value: 91218005,
    },
    {
      text: "1 x 3, 2 ply, Unlined, Flat Eye",
      value: 91218010,
    },
    {
      text: "1 x 4, 2 ply, Unlined, Flat Eye",
      value: 91218015,
    },
    {
      text: "1 x 6, 2 ply, Unlined, Flat Eye",
      value: 91218020,
    },
    {
      text: "1 x 8, 2 ply, Unlined, Flat Eye",
      value: 91218025,
    },
    {
      text: "1 x 10, 2 ply, Unlined, Flat Eye",
      value: 91218030,
    },
    {
      text: "2 x 4, 2 ply, Unlined, Flat Eye",
      value: 91219005,
    },
    {
      text: "2 x 6, 2 ply, Unlined, Flat Eye",
      value: 91219010,
    },
    {
      text: "2 x 8, 2 ply, Unlined, Flat Eye",
      value: 91219015,
    },
    {
      text: "2 x 10, 2 ply, Unlined, Flat Eye",
      value: 91219020,
    },
    {
      text: "2 x 12, 2 ply, Unlined, Flat Eye",
      value: 91219025,
    },
    {
      text: "2 x 16, 2 ply, Unlined, Flat Eye",
      value: 91219030,
    },
    {
      text: "2 x 20, 2 ply, Unlined, Flat Eye",
      value: 91219035,
    },
    {
      text: "3 x 6, 2 ply, Unlined, Tapered Eye",
      value: 91220005,
    },
    {
      text: "3 x 8, 2 ply, Unlined, Tapered Eye",
      value: 91220010,
    },
    {
      text: "3 x 10, 2 ply, Unlined, Tapered Eye",
      value: 91220015,
    },
    {
      text: "3 x 12, 2 ply, Unlined, Tapered Eye",
      value: 91220020,
    },
    {
      text: "3 x 20, 2 ply, Unlined, Tapered Eye",
      value: 91220025,
    },
    {
      text: "4 x 8, 2 ply, Unlined, Tapered Eye",
      value: 91221005,
    },
    {
      text: "4 x 10, 2 ply, Unlined, Tapered Eye",
      value: 91221010,
    },
    {
      text: "4 x 15, 2 ply, Unlined, Tapered Eye",
      value: 91221015,
    },
    {
      text: "4 x 20, 2 ply, Unlined, Tapered Eye",
      value: 91221020,
    },
    {
      text: "1 x 2, 2 ply, Lined, Flat Eye",
      value: 91222005,
    },
    {
      text: "1 x 3, 2 ply, Lined, Flat Eye",
      value: 91222010,
    },
    {
      text: "1 x 4, 2 ply, Lined, Flat Eye",
      value: 91222015,
    },
    {
      text: "1 x 6, 2 ply, Lined, Flat Eye",
      value: 91222020,
    },
    {
      text: "1 x 8, 2 ply, Lined, Flat Eye",
      value: 91222025,
    },
    {
      text: "1 x 10, 2 ply, Lined, Flat Eye",
      value: 91222030,
    },
    {
      text: "2 x 4, 2 ply, Lined, Flat Eye",
      value: 91223005,
    },
    {
      text: "2 x 6, 2 ply, Lined, Flat Eye",
      value: 91223010,
    },
    {
      text: "2 x 8, 2 ply, Lined, Flat Eye",
      value: 91223015,
    },
    {
      text: "2 x 10, 2 ply, Lined, Flat Eye",
      value: 91223020,
    },
    {
      text: "2 x 12, 2 ply, Lined, Flat Eye",
      value: 91223025,
    },
    {
      text: "2 x 16, 2 ply, Lined, Flat Eye",
      value: 91223030,
    },
    {
      text: "2 x 20, 2 ply, Lined, Flat Eye",
      value: 91223035,
    },
    {
      text: "3 x 6, 2 ply, Lined, Tapered Eye",
      value: 91224005,
    },
    {
      text: "3 x 8, 2 ply, Lined, Tapered Eye",
      value: 91224010,
    },
    {
      text: "3 x 10, 2 ply, Lined, Tapered Eye",
      value: 91224015,
    },
    {
      text: "3 x 12, 2 ply, Lined, Tapered Eye",
      value: 91224020,
    },
    {
      text: "3 x 20, 2 ply, Lined, Tapered Eye",
      value: 91224025,
    },
    {
      text: "4 x 8, 2 ply, Lined, Tapered Eye",
      value: 91225005,
    },
    {
      text: "4 x 10, 2 ply, Lined, Tapered Eye",
      value: 91225010,
    },
    {
      text: "4 x 15, 2 ply, Lined, Tapered Eye",
      value: 91225015,
    },
    {
      text: "4 x 20, 2 ply, Lined, Tapered Eye",
      value: 91225020,
    },
    {
      text: "1 x 2, 1 ply, Unlined, Twisted Eye",
      value: 91226005,
    },
    {
      text: "1 x 3, 1 ply, Unlined, Twisted Eye",
      value: 91226010,
    },
    {
      text: "1 x 4, 1 ply, Unlined, Twisted Eye",
      value: 91226015,
    },
    {
      text: "1 x 6, 1 ply, Unlined, Twisted Eye",
      value: 91226020,
    },
    {
      text: "1 x 8, 1 ply, Unlined, Twisted Eye",
      value: 91226025,
    },
    {
      text: "1 x 10, 1 ply, Unlined, Twisted Eye",
      value: 91226030,
    },
    {
      text: "2 x 4, 1 ply, Unlined, Twisted Eye",
      value: 91227005,
    },
    {
      text: "2 x 6, 1 ply, Unlined, Twisted Eye",
      value: 91227010,
    },
    {
      text: "2 x 8, 1 ply, Unlined, Twisted Eye",
      value: 91227015,
    },
    {
      text: "2 x 10, 1 ply, Unlined, Twisted Eye",
      value: 91227020,
    },
    {
      text: "2 x 12, 1 ply, Unlined, Twisted Eye",
      value: 91227025,
    },
    {
      text: "2 x 16, 1 ply, Unlined, Twisted Eye",
      value: 91227030,
    },
    {
      text: "2 x 20, 1 ply, Unlined, Twisted Eye",
      value: 91227035,
    },
    {
      text: "3 x 6, 1 ply, Unlined, Twisted tapered Eye",
      value: 91228005,
    },
    {
      text: "3 x 8, 1 ply, Unlined, Twisted tapered Eye",
      value: 91228010,
    },
    {
      text: "3 x 10, 1 ply, Unlined, Twisted tapered Eye",
      value: 91228015,
    },
    {
      text: "3 x 12, 1 ply, Unlined, Twisted tapered Eye",
      value: 91228020,
    },
    {
      text: "3 x 20, 1 ply, Unlined, Twisted tapered Eye",
      value: 91228025,
    },
    {
      text: "4 x 8, 1 ply, Unlined, Twisted tapered Eye",
      value: 91229005,
    },
    {
      text: "4 x 10, 1 ply, Unlined, Twisted tapered Eye",
      value: 91229010,
    },
    {
      text: "4 x 15, 1 ply, Unlined, Twisted tapered Eye",
      value: 91229015,
    },
    {
      text: "4 x 20, 1 ply, Unlined, Twisted tapered Eye",
      value: 91229020,
    },
    {
      text: "1 x 2, 2 ply, Unlined, Twisted Eye",
      value: 91230005,
    },
    {
      text: "1 x 3, 2 ply, Unlined, Twisted Eye",
      value: 91230010,
    },
    {
      text: "1 x 4, 2 ply, Unlined, Twisted Eye",
      value: 91230015,
    },
    {
      text: "1 x 6, 2 ply, Unlined, Twisted Eye",
      value: 91230020,
    },
    {
      text: "1 x 8, 2 ply, Unlined, Twisted Eye",
      value: 91230025,
    },
    {
      text: "1 x 10, 2 ply, Unlined, Twisted Eye",
      value: 91230030,
    },
    {
      text: "2 x 4, 2 ply, Unlined, Twisted Eye",
      value: 91231005,
    },
    {
      text: "2 x 6, 2 ply, Unlined, Twisted Eye",
      value: 91231010,
    },
    {
      text: "2 x 8, 2 ply, Unlined, Twisted Eye",
      value: 91231015,
    },
    {
      text: "2 x 10, 2 ply, Unlined, Twisted Eye",
      value: 91231020,
    },
    {
      text: "2 x 12, 2 ply, Unlined, Twisted Eye",
      value: 91231025,
    },
    {
      text: "2 x 16, 2 ply, Unlined, Twisted Eye",
      value: 91231030,
    },
    {
      text: "2 x 20, 2 ply, Unlined, Twisted Eye",
      value: 91231035,
    },
    {
      text: "3 x 6, 2 ply, Unlined, Twisted tapered Eye",
      value: 91232005,
    },
    {
      text: "3 x 8, 2 ply, Unlined, Twisted tapered Eye",
      value: 91232010,
    },
    {
      text: "3 x 10, 2 ply, Unlined, Twisted tapered Eye",
      value: 91232015,
    },
    {
      text: "3 x 12, 2 ply, Unlined, Twisted tapered Eye",
      value: 91232020,
    },
    {
      text: "3 x 20, 2 ply, Unlined, Twisted tapered Eye",
      value: 91232025,
    },
    {
      text: "4 x 8, 2 ply, Unlined, Twisted tapered Eye",
      value: 91233005,
    },
    {
      text: "4 x 10, 2 ply, Unlined, Twisted tapered Eye",
      value: 91233010,
    },
    {
      text: "4 x 15, 2 ply, Unlined, Twisted tapered Eye",
      value: 91233015,
    },
    {
      text: "4 x 20, 2 ply, Unlined, Twisted tapered Eye",
      value: 91233020,
    },
  ];

  const [detail, setDetail] = useState({ part_id: "" });
  const [inputs, setInputs] = useState(initialState);

  const handlePartList = (e) => {
    setDetail({ ...detail, [e.target.name]: e.target.value });
  };

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const cert = inputs;
    setInputs(initialState);
    await axios.post("/thortex", cert);
    setInputs(initialState);
  };

  return (
    <>
      {console.log(detail)}
      <ReactHTMLDatalist
        name={"part_id"}
        onChange={handlePartList}
        classNames={"classone classtwo"}
        options={optionsArr}
      />
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
          value={inputs.verticalB}
          placeholder="verticalB"
          name="verticalB"
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
          value={inputs.basket}
          placeholder="basket"
          name="basket"
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
    </>
  );
}

export default AddCertificate;

// Operator enters 4 inputs Date / Name / Part # (Dropdown/Text) / Serial number
// Rework form to only contain 4 fields, automatically fill out other fields on select
// All products exist in collection in DB
// Add products to database
// Gets the last serial number and displays last serial number
// Last serial number renders to the page
// Serial number prefix is associated with a specific label type 10 (big label) or 11 (small label)
// Serial number prefix is selected client side?
// Part number is associated with specific product type autofills remaining data when selected or entered
// Create dropdown that can also be typed in selects part number from database of parts
// Associated with product printer display line to easily select for printing
// Field shows with printer database line number

// Additional routes with same logic for more product lines
// Process will be done again for additional products
