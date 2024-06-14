import React from "react";
import Testimonial from "./components/Testimonial";
import reviews from "./data.js";

const App = () => {
  return (
    <div className="flex flex-col width-[100vw] h-[100vh] justify-center items-center bg-gray-200 ">
      <div className="text-center flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        <div className="bg-violet-400 h-[4px] w-1/5"></div>
        <Testimonial reviews={reviews} />
      </div>
    </div>
  );
};

export default App;
