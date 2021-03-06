import React from "react";
import Logo from "./../assets/logo.svg";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import XQ1 from "./../assets/XQ1.png";
import XQ2 from "./../assets/XQ2.png";
import Mike from "./../assets/mike.png";

const Certificate = (props) => {
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

  const {
    Serial,
    Date,
    Fabricator,
    Part,
    Name,
    Vertical,
    Choker,
    VerticalB,
    Manufacturer,
  } = props;

  console.log("Data is:", props.cert);
  return (
    <div style={{ padding: "5px" }}>
      <div
        style={{
          margin: "10px auto",
          width: "660px",
          border: "5px solid black",
          padding: "15px",
        }}
      >
        <Grid container spacing={0}>
          <Grid item lg={6}>
            <img src={Logo} alt="THOR-TEX logo" style={{ height: "70px" }} />
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
                <p style={datastyle}>{Serial}</p>
              </Grid>
              <Grid container spacing={2} align="center">
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={titlestyle}>
                    <strong>Manufacturer :</strong>
                  </p>
                </Grid>
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={datastyle}>{Manufacturer}</p>
                </Grid>
              </Grid>
              <Grid container spacing={2} align="center">
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={titlestyle}>
                    <strong>Part # :</strong>
                  </p>
                </Grid>
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={datastyle}>{Part} </p>
                </Grid>
              </Grid>
              <Grid container spacing={2} align="center">
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={titlestyle}>
                    <strong>Part Description : </strong>
                  </p>
                </Grid>
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={datastyle}>{Name}</p>
                </Grid>
              </Grid>

              <br />
              <br />
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
                  <p style={datastyle}>{Vertical}</p>
                </Grid>
              </Grid>
              <Grid container spacing={2} align="center">
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={titlestyle}>
                    <strong>Choker WLL : </strong>
                  </p>
                </Grid>
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={datastyle}>{Choker}</p>
                </Grid>
              </Grid>
              <Grid container spacing={2} align="center">
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={titlestyle}>
                    <strong>Vertical Basket WLL : </strong>
                  </p>
                </Grid>
                <Grid item xs={6} style={{ padding: "0px" }}>
                  <p style={datastyle}>{VerticalB}</p>
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
                  <p style={datastyle}>{Fabricator}</p>
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
                  <p style={datastyle}>{Date} </p>
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
      <form style={{ textAlign: "center" }}>
        <Link to="/">
          <input
            type="button"
            value="Back"
            style={{
              backgroundColor: "#02192D",
              border: "none",
              color: "white",
              margin: "5px",
              height: "40px",
              fontFamily: "Poppins",
              fontSize: "20px",
            }}
          />
        </Link>
      </form>
    </div>
  );
};

export default Certificate;
