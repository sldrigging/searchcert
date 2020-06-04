import React, { useState } from "react";
import Logo from './../assets/logo.svg'

function CertDetail(props)  {
    const [clicked, setClicked] = useState(false); 
    const [visibility, setVisibility] = useState(true);   
    const { Serial, SN, Basket, Lining, Eye,prefix ,operator , Part, Name, Width, Length,Ply ,Vertical ,Choker } = props;

function handleClick () {
    console.log('clicked');
    setClicked(true);   
    setVisibility(false); 
    }
     
    if (clicked) {
        return <Doc data={props}/>
      } 
    
    return (
        <div align="center">
      <table border="1px solid grey" style={{margin: "20px"}}>
      <tbody>
          <tr>            
              <td style={{padding: "8px"}}>Serial</td>
              <td style={{padding: "8px"}}>Prefix</td>
              <td style={{padding: "8px"}}>SN</td>
              <td style={{padding: "8px"}}>Date</td>
              <td style={{padding: "8px"}}>Operator</td>
              <td style={{padding: "8px"}}>Part</td>
              <td style={{padding: "8px"}}>Name</td>
              <td style={{padding: "8px"}}>Width</td>
              <td style={{padding: "8px"}}>Length</td>
              <td style={{padding: "8px"}}>Ply</td>
              <td style={{padding: "8px"}}>Vertical</td>
              <td style={{padding: "8px"}}>Choker</td>
              <td style={{padding: "8px"}}>Basket</td>
              <td style={{padding: "8px"}}>Lining</td>
              <td style={{padding: "8px"}}>Eye Type</td>
              <td style={{padding: "8px"}} rowSpan={2}  style={{cursor: 'pointer'}} onClick={handleClick}>View Certificate</td>
           </tr>
           <tr >
           <td style={{padding: "8px"}}>{Serial}</td>
           <td style={{padding: "8px"}}>{prefix}</td>
           <td style={{padding: "8px"}}>{SN}</td>
           <td style={{padding: "8px"}}>{Date}</td>
           <td style={{padding: "8px"}}>{operator}</td>
           <td style={{padding: "8px"}}>{Part}</td>
           <td style={{padding: "8px"}}>{Name}</td>
           <td style={{padding: "8px"}}>{Width}</td>
           <td style={{padding: "8px"}}>{Length}</td>
           <td style={{padding: "8px"}}>{Ply}</td>
           <td style={{padding: "8px"}}>{Vertical}</td>
           <td style={{padding: "8px"}}>{Choker}</td>
              <td style={{padding: "8px"}}>{Basket}</td>
              <td style={{padding: "8px"}}>{Lining}</td>
              <td style={{padding: "8px"}}>{Eye}</td>
           </tr>
      </tbody>
   </table>
   
   </div>      
    );
  };
  
  export default CertDetail

  function Doc(data) {

    function handlePrint () {
        window.print();
    }
    function handleRefresh(){
        window.location.reload();
    }
      console.log('Data is:',data);
    const { Serial, SN, Basket, Date, Lining, Eye,prefix ,operator , Part, Name, Width, Length,Ply ,Vertical ,Choker } = data.data;
    return (
        <div>
        <p onClick={handlePrint} style={{fontFamily:'Poppins', fontSize:'16px', margin:'4px', cursor:'pointer'}}><u>Print Certificate</u></p>      
        <div style={{margin: '10px auto',width:'60%', border: '5px solid black', padding:'15px'}}>
        <img src={Logo} alt="Sea-Land Distributors" style={{height:'80px'}}/>
        <p style={{fontSize: '30px', margin:'10px'}}> <u>Certificate of Assurance</u></p>
        <p  style={{float:'left',fontSize:'12px', color: 'grey'}}> Date: 5/5/2002</p>
        <p align="right" style={{fontSize:'12px', color: 'grey'}}>Address: 1000 Edwards Avenue, Suite C,<br/>  New Orleans, Louisiana 70123 USA</p>
        
        <div align="center">
           <table >
           <tbody >
       <tr>            
           <td style={{padding: "5px", border: "2px solid grey"}} colSpan={2}><strong>Serial Number:</strong> {Serial}</td>
           <td style={{padding: "5px", border: "2px solid grey"}}><strong>Prefix: </strong>{prefix}</td>
           <td style={{padding: "5px", border: "2px solid grey"}}><strong>SN: </strong>{SN}</td>              
       </tr>
       <tr>            
           <td style={{padding: "5px", border: "2px solid grey"}} colSpan={2}><strong>Part: </strong> {Part}</td>
           <td style={{padding: "5px", border: "2px solid grey"}} colSpan={2}><strong>Name: </strong> {Name}</td>             
       </tr>
       <tr>            
           <td style={{padding: "5px", border: "2px solid grey"}}><strong>Width: </strong> {Width}</td>
           <td style={{padding: "5px", border: "2px solid grey"}}><strong>Length :</strong> {Length}</td>    
           <td style={{padding: "5px", border: "2px solid grey"}}><strong>Ply: </strong> {Ply}</td>     
           <td style={{padding: "5px", border: "2px solid grey"}}><strong>Vertical: </strong> {Vertical}</td>       
       </tr>
       <tr>            
           <td style={{padding: "5px", border: "2px solid grey"}} colSpan={2}><strong>Choker: </strong>{Choker}</td>
           <td style={{padding: "5px", border: "2px solid grey"}} colSpan={2}><strong>Basket: </strong> {Basket}</td>         
       </tr>
       <tr>  
           <td style={{padding: "5px", border: "2px solid grey"}} colSpan={2}><strong>Lining: </strong> {Lining}</td>     
           <td style={{padding: "5px", border: "2px solid grey"}} colSpan={2}><strong>Eye Type: </strong> {Eye}</td>       
       </tr>
           </tbody>
           </table>
           <p style={{fontSize:'12px', color: 'grey'}}>Please contact your Sea-Land Distributors Customer Service if you have any questions.</p>
        </div>
        <hr/>
        <p style={{fontSize:'12px', textAlign:'left'}}><u>Shipping and Handling: </u>For orders less than five hundred and fifty (550) pounds and individual items less than one hundred and fifty (150) pounds, our standard method of shipment is UPS. If your order exceeds five hundred and fifty (550) pounds, an individual item exceeds one hundred and fifty (150) pounds, or the item is too large to ship via UPS you will be presented with LTL freight options. Please follow the prompts to select the correct options. For orders outside the contiguous continental United States, please contact us before placing your order. For orders over five thousand (5000) pounds, we will contact you after you place your order to arrange shipping.</p>
     </div>
     
        <form>
        <input type="button" value="Back" onClick={handleRefresh} style={{ backgroundColor:'#02192D',  border:'none', color:'white', margin:'5px', height:'40px', fontFamily:'Poppins', fontSize:'20px'}}/>
        </form>
     </div>
    )
}