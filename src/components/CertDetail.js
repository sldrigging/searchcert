import React from "react";
import { Grid } from "@material-ui/core";
import XQ1 from "./../assets/XQ1.png";
import XQ2 from "./../assets/XQ2.png";
import Mike from "./../assets/mike.png";
import Logo from "./../assets/logo.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const CertDetail = (props) => {
  function printOrder(fileName) {
    //console.log(Serial)
    window.scroll(0, 15);
    const input = document.getElementById("printme");
    html2canvas(input, { scale: "4" }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg");
      var pdf = new jsPDF("p", "mm", "a4");
      var width = pdf.internal.pageSize.getWidth();    
      var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
     
       if (viewportWidth>= 1920){
      pdf.addImage(imgData, 'JPEG', -175, 0, width*2.65, 0); 
       }
       else {
        pdf.addImage(imgData, 'JPEG', -80, 0, width*1.75, 0);
       }     
      pdf.setProperties({
        title: "THOR-TEX-Cert-"+fileName,
      });      
      //pdf.save("THOR-TEX-Cert-"+fileName);
      let newWindow = window.open("/");

      fetch(pdf.output("datauristring"))
        .then((res) => res.blob())
        .then((blob) => {
          newWindow.location = URL.createObjectURL(blob);
        });
    });
  }
  const mystyle = {
    padding: "8px",
    border: '2px solid grey'
  };
  function viewCert() {
    document.getElementById("myP").style.display = "block";
  }
  const {
    Serial,
    Date,
    Part,
    Name,
    Vertical,
    Choker,
    VerticalB,
    Manufacturer,
    Fabricator,
  } = props.cert;

  
  function handleClick() {
    document.getElementById("myP").style.display = "block";
    return <Test cert={props.cert} style={{ display: "none" }} />;
  }
  const fileName = props.cert.Serial;
  return (
    <div >
      {/* <button id="promt" onClick={handlePrompt} >Make new Search</button> */}
      <div align="center" >
        <table          
          style={{ margin: "20px", textAlign: "center", border:"2px solid grey"}}
        >
          <tbody >
            <tr > 
              <td style={mystyle}>Serial #</td>
              <td style={mystyle}>Date</td>
              <td style={mystyle}>Part #</td>
              <td style={mystyle}>Name</td>
              <td style={mystyle}>Vertical WLL</td>
              <td style={mystyle}>Choker WLL</td>
              <td style={mystyle}>Vertical Basket WLL</td>
              <td style={mystyle}>Manufacturer</td>
              <td
                rowSpan={2}
                onClick={viewCert}
                style={{ cursor: "pointer", fontSize: "22px", padding: "5px", backgroundColor:'#349bcd',color:'white' }}
                onClick={handleClick}
              >  View Certificate
              </td>
            </tr>
            <tr>
              <td style={mystyle}>{Serial}</td>
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
      </div>

      <div id="myP" className="" style={{ display: "none" }} align="center">
        <div
          onClick={() => printOrder(fileName)}
          style={{
            cursor: "pointer",
            fontSize: "25px",
            textDecoration: "underline",
          }}        >
          Print Certificate
        </div>

        <Test
          printableId="printme"
          s={Serial}
          m={Manufacturer}
          p={Part}
          pd={Name}
          v={Vertical}
          c={Choker}
          vb={VerticalB}
          f={Fabricator}
          d={Date}
        />
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
  fontFamily: "Roboto",
};

const datastyle = {
  fontSize: "13px",
  textAlign: "left",
  margin: "8px",
  fontFamily: "Roboto",
};

function Test(props) {
  return (
    <div id={props.printableId}>
      <div align="center"
        style={{
          width: "650px",
          margin: "15px",
          // border: "5px solid black",
          padding: "15px",
        }}
      ><div style={{border: '5px solid black',  padding: "15px"}}>
              <Grid container spacing={0} >
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
            fontSize: "35px",
            textAlign: "center",
            margin: "10px 0",
            fontFamily: "Roboto",
            fontWeight: 700,
          }}
        >
          CERTIFICATE OF CONFORMANCE
        </p>
        <Grid container spacing={3}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Grid container spacing={1}>
              <Grid container spacing={1} align="center">
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={titlestyle}>
                    <strong>Serial :</strong>
                  </p>
                </Grid>
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={datastyle}>{props.s}</p>
                </Grid>
              </Grid>
              <Grid container spacing={1} align="center">
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={titlestyle}>
                    <strong>Manufacturer :</strong>
                  </p>
                </Grid>
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={datastyle}>{props.m}</p>
                </Grid>
              </Grid>
              <Grid container spacing={1} align="center">
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={titlestyle}>
                    <strong>Part # :</strong>
                  </p>
                </Grid>
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={datastyle}> {props.p}</p>
                </Grid>
              </Grid>
              <Grid container spacing={1} align="center">
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={titlestyle}>
                    <strong>Part Description : </strong>
                  </p>
                </Grid>
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={datastyle}>{props.pd}</p>
                </Grid>
              </Grid>
              <Grid container spacing={1} align="center">
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
              <Grid container spacing={1} align="center">
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={titlestyle}>
                    <strong>Vertical WLL : </strong>
                  </p>
                </Grid>
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={datastyle}>{props.v}</p>
                </Grid>
              </Grid>
              <Grid container spacing={1} align="center">
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={titlestyle}>
                    <strong>Choker WLL : </strong>
                  </p>
                </Grid>
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={datastyle}>{props.c}</p>
                </Grid>
              </Grid>
              <Grid container spacing={1} align="center">
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
        <br />
        {/*main big container */}
        <Grid container spacing={3}>
          <Grid item lg={2}>
            <img src={XQ2} alt="XQ1" style={{ height: "60px" }} />
          </Grid>
          <Grid item lg={2}>
            <img src={XQ1} alt="XQ2" style={{ height: "60px" }} />
          </Grid>
          <Grid item lg={8} style={{ paddingTop: "20px" }}>
            <p style={{ fontSize: "14px", fontFamily: "Roboto" }}>
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
            fontFamily: "Roboto",
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
      
        <Grid container spacing={2}>
          <Grid item xs={2}></Grid>
          <Grid item xs={8}>
            <Grid container spacing={0}>
              <Grid container spacing={1} align="center">
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={titlestyle}>
                    <strong>Fabricator:</strong>
                  </p>
                </Grid>
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={datastyle}>{props.f}</p>
                </Grid>
              </Grid>
              <Grid container spacing={1} align="center">
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
              <Grid container spacing={1} align="center">
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
              <Grid container spacing={1} align="center">
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
        <p style={{ fontSize: "14px", fontFamily: "Roboto" }}>
          THOR-TEX USA is a registered trademark and division of Sea-Land
          Distributors, LLC.
        </p>
        </div>
      </div>
    </div>
  );
}
