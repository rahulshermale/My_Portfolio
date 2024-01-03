import React from "react";
import Java from '../images/Java.png';
import js from '../images/js.png';
import hcs from '../images/hcs.png';
import c from '../images/c.png';
import db from '../images/db.png';
import hub from '../images/hub.png';
import docker from '../images/docker.png';
import git from '../images/git.png';
import dsa from '../images/dsa.png';




import { Link } from "react-router-dom";


const imageStyle = {
  // margin: 'auto',
  width: '80px',
  height: '80px',
  // objectFit: 'left',
  border: '1px solid #000',
  boxShadow: '0 2px 4px rgba(0, 5, 10, 0.1)',
  marginRight: '20px', // Add margin-right for space between images
  borderRadius: '50%',
  display: "flex",
    // position:'fixed',
    bottom:'10',
    left:'20'
    
   
};

export default function Home() {
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "rgba(52, 280, 219, 5)",  textAlign:'justify',height: "100vh" ,fontFamily:'serif',}}
>
    
      <div className="row">
        <div className="col-5  text-center pt-5">
          <h1 style={{ color: "Blue" }}><b>LIKE NATURE</b></h1>
          <h1 style={{ color: "black" }}><b>BE CREATIVE !</b></h1>
          <p style={{color: "red"}}>This is your one-stop destination for everything amazing!</p>
         < Link to="/about">
          <button L className="btn btn-primary mt-3">Get Started</button>
          </Link>
          <hr className="dropdown-divider" />
          <br className="mt-5"/>


          

          <div className="col-1  text-center pt-5"style={{ margin: '200px', padding: '10px', display: 'flex', alignItems:  'flex-start',  objectFit: 'left', justifyContent: "space-between",}}>
  <img src={Java} className="rounded" style={imageStyle} alt='' />
  <img src={js} className="rounded" style={imageStyle} alt='' />
  <img src={hcs} className="rounded" style={imageStyle} alt='' />
  <img src={c} className="rounded" style={imageStyle} alt='' />
  <img src={db} className="rounded" style={imageStyle} alt='' />
  <img src={docker} className="rounded" style={imageStyle} alt='' />
  <img src={git} className="rounded" style={imageStyle} alt='' />
  <img src={hub} className="rounded" style={imageStyle} alt='' />
  <img src={dsa} className="rounded" style={imageStyle} alt='' />
</div>
                  </div>
        
      </div>
    </div>
  );
}
