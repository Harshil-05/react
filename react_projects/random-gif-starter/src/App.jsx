
import React from 'react';

import Random from './components/Random'
import Tag from './components/Tag'

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background items-center"> 

      <div className=" bg-white rounded-lg w-11/12 text-center mx-15  text-3xl mt-10 ">RANDOM GIFS</div>

      <div className="w-1/2 flex flex-col mt-10">
      <div ><Random/></div>
      <div><Tag/></div>
      </div>
      
    </div>
    
  );
}
