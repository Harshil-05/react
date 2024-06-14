import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft,faQuoteRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


function Testimonial({ reviews }) {
    const [value, setValue] = useState(0);

    // Function to go to the previous review
    const prevReview = () => {
        setValue((value - 1 + reviews.length) % reviews.length);
    };

    // Function to go to the next review
    const nextReview = () => {
        setValue((value + 1) % reviews.length);
    };

    if (reviews.length === 0) {
        return <div>No reviews available</div>;
    }

    function surpriseHandler()
    {
        setValue(Math.floor(Math.random() * 5)) ;
    }

    return (
        <div className="flex flex-col md:relative w-[50vw] bg-white justify-center items-center mt-10 p-10">
            <div className="absolute top-[-5rem] z-[10] left-10 mx-auto ">
                <img src={reviews[value].image} alt={reviews[value].name} 
                className='rounded-full aspect-square w-[140px] h-[140px] z-25' />
                <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-5] left-[10px]'>
                </div>
            </div>

            <div className="text-center mt-7">
                <h3 className='tracking-wider font-bold text-xl capitalize'>{reviews[value].name}</h3>
                <h5 className='font-bold text-l capitalize text-violet-300'>{reviews[value].job}</h5>
                <FontAwesomeIcon className="text-violet-500 mx-auto mt-5"  icon={faQuoteLeft} />
                <p className='text-center mt-4 text-slate-500'>{reviews[value].text}</p>
                <FontAwesomeIcon className="text-violet-500 mx-auto mt-5" icon={faQuoteRight} />
            </div>

            <div className="flex text-3xl mt-5 gap-3 text-violet-400 font-bold justify-center">
                <button onClick={prevReview} className='cursor-pointer hover:text-violet-500' >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button onClick={nextReview} className='cursor-pointer hover:text-violet-500'>
                    <FontAwesomeIcon icon={faChevronRight} className='cursor-pointer hover:text-violet-500' />
                </button>
            </div>
            <div>
            <button onClick={surpriseHandler} 
            className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold mt-10 text-white'>
                Surprise me</button>
            </div>
            
        </div>
    );
}

export default Testimonial;
