
import './App.css';
import React, { useState } from 'react';


function App() {
  const [formData,setformData]=useState({firstname:"" , email:"" ,isVisit:true}) ;

  console.log(formData) ;
  function changeHandler(event)
  {
    const {name,value,checked,type}=event.target ;
    setformData(prevvformData=>{
      return{
        ...prevvformData,
        [name]:type==="checkbox"?checked:value
      }
    });
  }
  return (
    <div className="App">
      <form>
        <input type="text" placeholder='firstname' onChange={changeHandler} name='firstname' value={formData.firstname}/>
        <input type="email" placeholder='enter email' onChange={changeHandler} name='email' value={formData.email}/>
        <input type='checkbox' onChange={changeHandler} name='isVisit' id='isVisit' checked={formData.isVisit}/>
        <label htmlFor='isVisit'>click karo change dekho</label>
      </form>
    </div>
  );
}

export default App;
