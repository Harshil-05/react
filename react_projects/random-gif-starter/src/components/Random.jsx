import React, { useState ,useEffect } from 'react';
import axios from 'axios';
const API_KEY=process.env.REACT_APP_GIPHY_API_KEY ;
export default function Random() {

  const [gif, setgif] = useState('');
  

      async function fetchData()
      {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const {data}=await axios.get(url) ;
       const imageSource=data.data.images.downsized_large.url ;
       setgif(imageSource)
      }

      useEffect(()=>{
        fetchData() ;
      },[])
        
      

  function clickHandler()
  {
      fetchData()
  }
  return (
  <div className="w-full bg-green-600 flex flex-col items-center rounded-lg border border-black
   gap-y-5 mt-[15px] ">
    
    <h1 className="uppercase text-2xl font-bold underline mt-4">A Random Gif</h1>
    <img src={gif} alt=""/>
    <button onClick={clickHandler} className="w-3/4 bg-slate-300 text-xl font-bold rounded-md py-2 ">Generate</button>

  </div>
  );
}
