import React, {useRef } from "react";
import { Grid } from "@material-ui/core";
import XQ1 from "./../assets/XQ1.png";
import XQ2 from "./../assets/XQ2.png";
import Mike from "./../assets/mike.png";
import Logo from "./../assets/logo.svg";

const CertDetail = (props) => { 

  function printOrder () {
    const printableElements = document.getElementById('printme').innerHTML;
        const orderHtml = '<html><head><title>Certificate of Conformance</title></head><body>' + printableElements + '</body></html>'
        const oldPage = document.body.innerHTML;
        document.body.innerHTML = orderHtml;
        window.print();
        document.body.innerHTML = oldPage
}
  const mystyle = {
    padding: "8px",
  };
  function viewCert() {
    document.getElementById("myP").style.display = "block";
  }
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
    Manufacturer, Fabricator
  } = props.cert;

  return (
    <div align="center">
      <table border="1px solid grey" style={{ margin: "20px" }}>
        <tbody>
          <tr>
            <td style={mystyle}>Serial #</td>
            <td style={mystyle}>Prefix</td>
            <td style={mystyle}>SN</td>
            <td style={mystyle}>Date</td>
            <td style={mystyle}>Part #</td>
            <td style={mystyle}>Name</td>
            <td style={mystyle}>Vertical WLL</td>
            <td style={mystyle}>Choker WLL</td>
            <td style={mystyle}>Vertical Basket WLL</td>
            <td style={mystyle}>Manufacturer</td>
            <td rowSpan={2} style={mystyle} onClick={viewCert} style={{cursor: 'pointer', fontSize:'25px'}}>View Certificate</td>
          </tr>
          <tr>
            <td style={mystyle}>{Serial}</td>
            <td style={mystyle}>{prefix}</td>
            <td style={mystyle}>{SN}</td>
            <td style={mystyle}>{Date}</td>
            <td style={mystyle}>{Part}</td>
            <td style={mystyle}>{Name}</td>
            <td style={mystyle}>{Vertical}</td>
            <td style={mystyle}>{Choker}</td>
            <td style={mystyle}>{VerticalB}</td>
            <td style={mystyle}>{Manufacturer}</td>
          </tr>
        </tbody>
      </table>
      {/* <Test cert={props.cert} style={{display:'none'}}/> */}

      <div id="myP" className='container'>
                <div onClick={() => printOrder()} style={{cursor:'pointer', fontSize:'25px', textDecoration:'underline'}}>
                    Print Certificate
                </div>
                <Test printableId='printme' s={Serial} m={Manufacturer} p={Part} pd={Name} v={Vertical} c ={Choker} vb={VerticalB} f={Fabricator} d={Date}/>
            </div> 
    </div>
  );
};


export default CertDetail;

const titlestyle = {
  textAlign: "right",
  fontSize: "13px",
  paddingRight: "2px",
  margin: "8px",
  fontFamily: "trade-gothic-next",
};

const datastyle = {
  fontSize: "13px",
  textAlign: "left",
  margin: "8px",
  fontFamily: "trade-gothic-next",
};
function Test(props)  {  
      return (
          <div id={props.printableId}>
             <div
        style={{
          margin: "10px auto",
          width: "600px",
          border: "5px solid black",
          padding: "15px",
        }}
      >
              <Grid container spacing={0}>
          <Grid item lg={6}>
            <img src={Logo} alt="THOR-TEX logo" style={{ height: "63px" }} />
          </Grid>
          <Grid item lg={6}>
            <p align="right" style={{ fontSize: "12px", textAlign: "right" }}>
              Address: 1000 Edwards Avenue, Suite C,
              <br /> New Orleans, LA, USA 70123
              <br />
              <a
                href="https://www.thor-tex.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "black" }}
              >
                THOR-TEX.com
              </a>{" "}
              1-888-682-8186
            </p>
          </Grid>
        </Grid>

        <p
          style={{
            fontSize: "30px",
            margin: "10px 0",
            fontFamily: "Archivo Black",
          }}
        >
          {" "}
          CERTIFICATE OF CONFORMANCE
        </p>
        <Grid container spacing={3}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Grid container spacing={0}>
              <Grid item xs={6}>
                <p style={titlestyle}>
                  <strong>Serial # : </strong>
                </p>
              </Grid>
              <Grid item xs={6}>
                <p style={datastyle}>{props.s}</p>
              </Grid>
              <Grid container spacing={2} align="center">
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={titlestyle}>
                    <strong>Manufacturer :</strong>
                  </p>
                </Grid>
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={datastyle}>{props.m}</p>
                </Grid>
              </Grid>
              <Grid container spacing={2} align="center">
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={titlestyle}>
                    <strong>Part # :</strong>
                  </p>
                </Grid>
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={datastyle}> {props.p}</p>
                </Grid>
              </Grid>
              <Grid container spacing={2} align="center">
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={titlestyle}>
                    <strong>Part Description : </strong>
                  </p>
                </Grid>
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={datastyle}>{props.pd}</p>
                </Grid>
              </Grid>
              <Grid container spacing={2} align="center">
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p
                    style={{
                      textAlign: "right",
                      fontSize: "16px",
                      paddingRight: "2px",
                      margin: "8px",
                    }}
                  >
                    <strong>Working Load Limits</strong>
                  </p>
                </Grid>
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={datastyle}></p>
                </Grid>
              </Grid>
              <Grid container spacing={2} align="center">
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={titlestyle}>
                    <strong>Vertical WLL : </strong>
                  </p>
                </Grid>
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={datastyle}>{props.v}</p>
                </Grid>
              </Grid>
              <Grid container spacing={2} align="center">
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={titlestyle}>
                    <strong>Choker WLL : </strong>
                  </p>
                </Grid>
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={datastyle}>{props.c}</p>
                </Grid>
              </Grid>
              <Grid container spacing={2} align="center">
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={titlestyle}>
                    <strong>Vertical Basket WLL : </strong>
                  </p>
                </Grid>
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={datastyle}>{props.vb}</p>
                </Grid>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          </Grid>{" "}
          {/* middle fat container */}
        </Grid>{" "}
        {/*main big container */}
        <Grid container spacing={3}>
          <Grid item lg={2}>
            <img src={XQ2} alt="XQ1" style={{ height: "70px" }} />
          </Grid>
          <Grid item lg={2}>
            <img src={XQ1} alt="XQ2" style={{ height: "70px" }} />
          </Grid>
          <Grid item lg={8} style={{ paddingTop: "25px" }}>
            <p style={{ fontSize: "14px", fontFamily: "trade-gothic-next" }}>
              <i>
                <strong>
                  Learn more about XQ Quality Assurance at{" "}
                  <a
                    href="http://xqassurance.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    XQAssurance.com
                  </a>
                </strong>
              </i>
            </p>
          </Grid>
        </Grid>
        <p
          style={{
            fontSize: "15px",
            textAlign: "left",
            fontFamily: "trade-gothic-next",
          }}
        >
          <strong>Statement: </strong>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et
          egestas neque. Sed vel libero suscipit, porta mi et, tempor arcu.
          Curabitur dapibus leo ac nibh feugiat, sed vehicula nulla consequat.
          Suspendisse potenti. Sed euismod ipsum ut metus consequat, at
          tincidunt mauris consectetur. Cras quis est at tortor pharetra porta.
          Duis convallis nunc sed sagittis elementum. Quisque commodo fringilla
          nulla a faucibus. Etiam mauris tellus, mattis non efficitur et,
          elementum quis sapien. Donec tempus id urna a consequat. Morbi id
          justo quis ipsum cursus finibus in vel odio. Duis sed facilisis nunc.
        </p>
        <br />
        <Grid container spacing={3}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Grid container spacing={0}>
              <Grid container spacing={2} align="center">
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={titlestyle}>
                    <strong>Fabricator:</strong>
                  </p>
                </Grid>
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={datastyle}>{props.f}</p>
                </Grid>
              </Grid>
              <Grid container spacing={2} align="center">
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={titlestyle}>
                    <strong>XQ Admin:</strong>
                  </p>
                </Grid>
                <Grid item xs={6} style={{ textAlign: "left" }}>
                  <img
                    src={Mike}
                    alt="sign"
                    style={{
                      height: "40px",
                      borderBottom: "1px solid black",
                      margin: "2px",
                    }}
                  />
                </Grid>
              </Grid>
              <Grid container spacing={2} align="center">
                <Grid item xs={6} style={{ padding: "0px" }}></Grid>
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p
                    style={{
                      margin: "0 0 8px 8px",
                      fontSize: "13px",
                      textAlign: "left",
                    }}
                  >
                    Mike Hall{" "}
                  </p>
                </Grid>
              </Grid>
              <Grid container spacing={2} align="center">
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={titlestyle}>
                    <strong>Date:</strong>
                  </p>
                </Grid>
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={datastyle}>{props.d} </p>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <br />
        <p style={{ fontSize: "14px", fontFamily: "trade-gothic-next" }}>
          THOR-TEX USA is a registered trademark and division of Sea-Land
          Distributors, LLC.
        </p>


        </div>
          </div>
      )
  }
