import React ,{useState}from 'react'

export default function Counter() {
    const[counter,setCounter]=useState(0);

let btnClick=()=>{

    console.log(counter +` Counte Value${counter}`)
    setCounter(counter+1);
}

  return (


    <div>
        Counter : {counter}
  <button onClick={btnClick} >incriment counter </button>
  </div>
  )
}
