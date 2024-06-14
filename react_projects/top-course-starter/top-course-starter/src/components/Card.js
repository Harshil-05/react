import React from 'react';
import { FcLike,FcLikePlaceholder } from "react-icons/fc";
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Card(props) {
    const [like, setLike] = useState(false);

    function clickHandler()
    {
        setLike(!like);
        like?toast.success("You liked this post"):toast.warning("You disliked this post");
    }
    let course = props.course;
    return (
        <div className='w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80 relative'>
            <div className='relative'>
                <img src={course.image.url} alt="" className='w-full h-auto' />
            </div>
            <div className='absolute right-3 top-36 w-[40px] h-[40px] bg-white rounded-full grid place-items-center'>
                <button onClick={clickHandler}> 
                    {like?<FcLike fontSize="1.75rem" />: <FcLikePlaceholder fontSize="1.75rem" />}
                </button>
            </div>
            <div className='p-4'>
                <p className='text-white font-semibold text-lg leading-6'>{course.title}</p>
                <p className='mt-2 text-white'>{course.description.length>100?course.description.slice(0,100)+"...":course.description}</p>

            </div>
        </div>
    );
}

export default Card;
