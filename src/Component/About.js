import React from 'react';
import project1 from '../images/project1.jpg';
const About = () => {
  return (
    // <div className="" style={{  backgroundImage: `url(${project1})`,  height: '100vh',}}>

<div className="" >
    <div className="container fluid " style={{margin:'20px',fontFamily:'serif',}}>
      {/* <div className="card shadow-lg p-2 mb-6 rounded"> */}
        <div className="card-body rounded ml-5 text-success" style={{color:'$blue',fontSize:''}}>
          <h2 className="card-title text-warning bg-" style={{textAlign:'center',fontFamily:'serif',fontSize:'55px'}}>Hello, I'm Rahul Shermale!</h2>
          {/* <div className="container fluid " style={{margin:'20px'}}> */}
          <p className="card-text" >
             A recent CDAC graduate passionate about full-stack development. I specialize in Java, MySQL, React, and C#.
            I hold a PG-Diploma in Advance Computing from USM's Shriram Mantri Vidyanidhi Info Tech Academy and a Bachelor's in Mechanical Engineering.
          </p>

          <p className="card-text">
            I sharpened my skills at Ring Plus Aqua LTD, where I worked on manufacturing Flywheel Starter Ring Gears for different engines.
            Beyond work, I've also developed ComputerSeekho.com, a system for a computer institute.
          </p>

          <p className="card-text">
            My tech journey isn't just about coding; it's about solving real-world problems. I even designed a Modern Toilet System for Indian Railways.
          </p>

          <p className="card-text">
            Beyond code, I love languages—Marathi, Hindi, and English. My interests span software development, database management, networking, testing, and providing technical support.
          </p>

          <p className="card-text">
            Connect with me on LinkedIn <a href="https://www.linkedin.com/in/rahul-shermale-917797253/" target="_blank" rel="noopener noreferrer">linkedin.com/in/rahul-shermale-917797253</a> or check out my projects on GitHub <a href="https://github.com/rahulshermale" target="_blank" rel="noopener noreferrer">github.com/rahulshermale</a>. Excited about future tech adventures!
          </p>

          <p className="card-text"><small className="text-muted">Best, Rahul Shermale</small></p>
    
          </div>
      </div>
    </div>
    // </div>
  );
};

export default About;
