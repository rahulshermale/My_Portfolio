import { useState } from "react";

export default function TextArea(props) {
  const handleOnClick = () => {
    console.log("Handle click event ");
    let nm=text.toUpperCase();

setText(nm)
  
  };
  const handleOnChange = (event) => {
    console.log("on change Event ");
    setText(event.target.value)
  };

  const handleOnClickLower=()=>{

    let lc=text.toLocaleLowerCase();
    setText(lc);
  }

  const [text,setText] = useState("Enter the text");

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="mybox"
          value={text}
          onChange={handleOnChange}
          rows="6"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleOnClick}>
        Convert to Upper Case{" "}
      </button>
      <br />
      <button className="btn btn-primary" onClick={handleOnClickLower}>
        Convert to Lower Case{" "}
      </button>
    </div>
  );

 
}
