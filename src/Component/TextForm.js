import React , { useState } from "react";

export default function TextForm(props){

    const handleUpClick = () => {
        // let newText=text.toUpperCase();
        useText("Text Enter Rahul")
    }
    const handleOnChange=(event)=>{
        useText();
    }

    const[text,useText]=useState("Enter the text");

    return(

<div>

<h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" id="mybox" value={text}  rows="6"></textarea>
</div>
  <button className="btn btn-primary" >Convert to Upper Case </button>
</div>
);

// onChange={handleOnChange} onClick={handleUpClick}

}