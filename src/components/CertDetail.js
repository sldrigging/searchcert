import React, { useState } from "react";
import Logo from './../assets/logo.svg'

function CertDetail(props)  {
    const [clicked, setClicked] = useState(false);    
    const { Serial, SN, Basket, Lining, Eye,prefix ,operator , Part, Name, Width, Length,Ply ,Vertical ,Choker } = props;

  
function handleClick () {
    console.log('clicked');
    setClicked(true);    
    }
    
    if (clicked) {
        return <Doc data={props}/>
      } 

    return (
        <div align="center">
      <table border="1px solid grey" style={{margin: "20px"}}>
      <tbody>
          <tr>            
              <td style={{padding: "20px"}}>Serial</td>
              <td style={{padding: "20px"}}>Prefix</td>
              <td style={{padding: "20px"}}>SN</td>
              <td style={{padding: "20px"}}>Date</td>
              <td style={{padding: "20px"}}>Operator</td>
              <td style={{padding: "20px"}}>Part</td>
              <td style={{padding: "20px"}}>Name</td>
              <td style={{padding: "20px"}}>Width</td>
              <td style={{padding: "20px"}}>Length</td>
              <td style={{padding: "20px"}}>Ply</td>
              <td style={{padding: "20px"}}>Vertical</td>
              <td style={{padding: "20px"}}>Choker</td>
              <td style={{padding: "20px"}}>Basket</td>
              <td style={{padding: "20px"}}>Lining</td>
              <td style={{padding: "20px"}}>Eye Type</td>
              <td style={{padding: "20px"}} rowSpan={2}  style={{cursor: 'pointer'}} onClick={handleClick}>View Certificate</td>
           </tr>
           <tr >
           <td style={{padding: "20px"}}>{Serial}</td>
           <td style={{padding: "20px"}}>{prefix}</td>
           <td style={{padding: "20px"}}>{SN}</td>
           <td style={{padding: "20px"}}>{Date}</td>
           <td style={{padding: "20px"}}>{operator}</td>
           <td style={{padding: "20px"}}>{Part}</td>
           <td style={{padding: "20px"}}>{Name}</td>
           <td style={{padding: "20px"}}>{Width}</td>
           <td style={{padding: "20px"}}>{Length}</td>
           <td style={{padding: "20px"}}>{Ply}</td>
           <td style={{padding: "20px"}}>{Vertical}</td>
           <td style={{padding: "20px"}}>{Choker}</td>
              <td style={{padding: "20px"}}>{Basket}</td>
              <td style={{padding: "20px"}}>{Lining}</td>
              <td style={{padding: "20px"}}>{Eye}</td>
           </tr>
      </tbody>
   </table>
   
   </div>      
    );
  };
  
  export default CertDetail

  function Doc(data) {
      console.log('Data is:',data);
    const { Serial, SN, Basket, Date, Lining, Eye,prefix ,operator , Part, Name, Width, Length,Ply ,Vertical ,Choker } = data.data;
    return (
        <div style={{margin: '20px auto',width:'50%', border: '5px solid black', padding:'20px'}}>
            <img src={Logo} alt="Sea-Land Distributors" style={{height:'100px'}}/>
           <h1> Certificate of Assurance</h1>
           <div align="center">
               <p>This is the certification of Assurance for Serial Number {Serial}.</p>
               <p>by operator {operator} on Date: {Date}.</p>
               <p>Part Number: {Part}</p>
               <p>Name: {Name}</p>
               <p>Width: {Width}, 
               Length: {Length}</p>
               <p>Ply: {Ply}</p>
               <p>Vertical: {Vertical}, Choker: {Choker}, Basket: {Basket}, Lining: {Lining},Eye Type Number: {Part}</p>
           </div>
        </div>
    )
}