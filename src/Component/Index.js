import React from 'react';
import project1 from '../images/project1.jpg'; 
import project2 from '../images/project2.jpg'; // Adjust the path accordingly

export default function Index() {
  return (
    <div claasName="container" style={{ backgroundColor: '#e1d2f2', height: '100vh' }}>
      {/* <div>Hi person, I am {Math.floor(Math.random() * 30)}</div> */}

      <img src={project1} className="rounded mx-auto " alt='' />
      <img src={project2} className="rounded mx-auto " alt='' />
    </div>
  );
}
