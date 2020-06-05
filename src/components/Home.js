import React from 'react'
import Test from './Test'
import { Link } from 'react-router-dom';


export default function Home() {
    return <div className="App"> 
    <nav style={{backgroundColor: 'lightgrey', padding:'2px', margin:'0',fontFamily:'Poppins' }}>
            <ul style={{display:'flex', justifyContent: 'center', fontstyle:'Poppins', listStyle: 'none', fontSize:'18px'}} >
              <li >
                <Link to="/" style={{ color:'grey', padding:'0 10px'}} align="center">Home</Link>
              </li>           
              <li >
                <Link to="/certlist" style={{ color:'grey', padding:'0 10px'}} align="center">Cert List</Link>
              </li>
              
            </ul>
          </nav>    
    <Test/>
  </div>;
}
