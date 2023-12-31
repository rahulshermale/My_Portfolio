import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

// import TextForm from './Component/TextForm';
import TextArea from './Component/TextArea';

function App() {
  return (<>
  <Navbar title="Rahul" Home="Home" about="About" />
  {/* <TextForm heading="Text Enter "/> */}
  <TextArea heading="Enter The Text"></TextArea>
  </>
   
  );
}

export default App;
