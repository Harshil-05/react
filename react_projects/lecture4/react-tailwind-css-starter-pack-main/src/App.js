import "./App.css";
import React, { useState,useEffect } from 'react';


function App() {
  const [comp, setComp] = useState("");

  function changeHandler(event)
  {
    console.log(event.target.value);
    setComp(event.target.value);
  }

  useEffect(()=>{
    console.log("useEffect");
  }
) ;

  return (
  <div>
     <input type="text" className="border-2" onChange={changeHandler}></input>
    <div>{comp}</div>
  </div>
  );
}

export default App;
