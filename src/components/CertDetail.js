import React, { Component } from "react";
import { Link } from "react-router-dom";
import  Certificate from './Certificate';

const CertDetail = (props) => {
  const mystyle = {
    padding: "8px",
  };

  //const [clicked, setClicked] = useState(false);
  const {
    Serial,
    prefix,
    SN,
    Date,
    Part,
    Name,
    Vertical,
    Choker,
    VerticalB,
    Manufacturer,
  } = props.cert;

  

  //  function handleClick () {
  //      console.log('clicked');
  //      setClicked(true);
  //      }

  //      if (clicked) {
  //          return <Certificate data={props}/>
  //        }

  return (
    <div align="center">
      <table border="1px solid grey" style={{ margin: "20px" }}>
        <tbody>
          <tr>
            <td style={mystyle}>Serial #</td>
            <td style={mystyle}>Prefix</td>
            <td style={mystyle}>SN</td>
            <td style={mystyle}>Date</td>
            {/* <td style={mystyle}>Fabricator</td> */}
            <td style={mystyle}>Part #</td>
            <td style={mystyle}>Name</td>
            {/* <td style={mystyle}>Width</td>
              <td style={mystyle}>Length</td>
              <td style={mystyle}>Ply</td> */}
            <td style={mystyle}>Vertical WLL</td>
            <td style={mystyle}>Choker WLL</td>
            <td style={mystyle}>Vertical Basket WLL</td>
            {/* <td style={mystyle}>Eye Lining</td>
              <td style={mystyle}>Eye Type</td> */}
            <td style={mystyle}>Manufacturer</td>
            <td style={mystyle} rowSpan={2} style={{ cursor: "pointer" }} >
            <Link to="/certificate"> View Certificate</Link>
                
              
            </td>
          </tr>
          <tr>
            <td style={mystyle}>{Serial}</td>
            <td style={mystyle}>{prefix}</td>
            <td style={mystyle}>{SN}</td>
            <td style={mystyle}>{Date}</td>
            {/* <td style={mystyle}>{Fabricator}</td> */}
            <td style={mystyle}>{Part}</td>
            <td style={mystyle}>{Name}</td>
            {/* <td style={mystyle}>{Width}</td>
           <td style={mystyle}>{Length}</td>
           <td style={mystyle}>{Ply}</td> */}
            <td style={mystyle}>{Vertical}</td>
            <td style={mystyle}>{Choker}</td>
            <td style={mystyle}>{VerticalB}</td>
            {/* <td style={mystyle}>{EyeL}</td>
              <td style={mystyle}>{Eye}</td> */}
            <td style={mystyle}>{Manufacturer}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CertDetail;
