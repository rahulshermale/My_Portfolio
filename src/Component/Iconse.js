import React from 'react'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

export default function Iconse() {
    
  

  returnm (
    <footer className="footer fixed-bottom bg-secondary row-5">
      <div className="container">
       
       
     
      <a href="https://www.facebook.com/" style={{margin: '20px'}} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="3x" className="social-icon" />
      </a>
      <a href="https://www.twitter.com/" style={{margin: '20px'}} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} size="3x" className="social-icon" />
      </a>
      <a href="https://www.instagram.com/" style={{margin: '20px', color:'red'}} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} size="3x" className="social-icon" />
      </a>
      <a href="https://www.linkedin.com/" style={{margin: '20px'}} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="3x" className="social-icon" />
        
      </a>
     <div>
     {/* <Footer/> */}
     </div>
      
     
  
     
    </div>
        
      
    </footer>
  );
}


