import Navbar from "./components/Navbar.js";
import Filter from "./components/Filter.js";
import React, { useState,useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { apiUrl, filterData } from "./data.js";
import Spinner from "./components/Spinner.js";
import Cards from "./components/Cards.js";

const App = () => {

  const [courses, setCourses] = useState(null) ;
  const[loading,setLoading]=useState(true) ;
  const [category  , setCategory] = useState(filterData[0].title)

  async function fetchData(){
    setLoading(true) ;
    try{
      const response = await fetch(apiUrl);
      const output = await response.json(); 
      setCourses(output.data);
    }
    catch(error){
      toast.error("Network Issue") ;
    }
    setLoading(false) ;
  }

  useEffect(()=>{
    fetchData();
  },[])


  return (
    <div className="min-h-screen flex flex-col ">
      <div>
      <Navbar />
      </div> 
      <div className="bg bg-bgDark2 min-h-screen">
      <div>
      <Filter filterData={filterData} category={category} setCategory={setCategory} />
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {loading?(<Spinner/>):(<Cards courses={courses} category={category}/>)}
      </div>
      </div>
     
    </div>
  );
};

export default App;
