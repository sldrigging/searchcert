import React from "react";
import Sheet from "./TestData.json";
import { Link } from "react-router-dom";

export default function CertList() {
  const data = Sheet;

  return (
    <div>
      <nav
        style={{
          backgroundColor: "lightgrey",
          padding: "2px",
          margin: "0",
          fontFamily: "Poppins",
        }}
      >
        <ul
          style={{
            display: "flex",
            justifyContent: "center",
            fontstyle: "Poppins",
            listStyle: "none",
            fontSize: "18px",
          }}
        >
          <li>
            <Link
              to="/"
              style={{ color: "grey", padding: "0 10px" }}
              align="center"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/certlist"
              style={{ color: "grey", padding: "0 10px" }}
              align="center"
            >
              Cert List
            </Link>
          </li>
        </ul>
      </nav>

      <h1
        style={{ fontFamily: "Poppins", margin: "20px", textAlign: "center" }}
      >
        Cert List
      </h1>

      <table border="1px solid grey" style={{ margin: "20px" }}>
        <tbody>
          <tr>
            <td style={{ padding: "8px" }}>Serial #</td>
            <td style={{ padding: "8px" }}>Date</td>
            <td style={{ padding: "8px" }}>Part #</td>
            <td style={{ padding: "8px" }}>Name</td>
            <td style={{ padding: "8px" }}>Vertical WLL</td>
            <td style={{ padding: "8px" }}>Choker WLL</td>
            <td style={{ padding: "8px" }}>Vertical Basket WLL</td>
            <td style={{ padding: "8px" }}>Manufacturer</td>
          </tr>
          {data.map((data) => (
            <tr>
              <td style={{ padding: "8px" }}>{data.Serial}</td>
              <td style={{ padding: "8px" }}>{data.Date}</td>
              <td style={{ padding: "8px" }}>{data.Part}</td>
              <td style={{ padding: "8px" }}>{data.Name}</td>
              <td style={{ padding: "8px" }}>{data.Vertical}</td>
              <td style={{ padding: "8px" }}>{data.Choker}</td>
              <td style={{ padding: "8px" }}>{data.VerticalB}</td>
              <td style={{ padding: "8px" }}>{data.Manufacturer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
