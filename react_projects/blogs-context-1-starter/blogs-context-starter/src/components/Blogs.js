import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Spinner from './Spinner';
import "./blogs.css"

function Blogs() {
    const { posts, loading } = useContext(AppContext);
    console.log({ posts });

    return (
        <div className='mt-20 w-11/12 max-w-[650px] flex flex-col py-4 gap-y-7'>
            {loading ? (
                <Spinner />
            ) : (
                (!posts || posts.length === 0) ? (
                    <h1>No Post Found</h1>
                ) : (
                    posts.map((post) => (
                        <div key={post.id}>
                            <p className='font-bold text-lg'>{post.title}</p>
                            <p className='text-xs mt-3'>
                                By <span className='italic'>{post.author}</span> on <span className='underline'>{post.category}</span>
                            </p>
                            <p className='text-xs mb-3'>Posted on {post.date}</p>
                            <p className='text-md mt-[14px]'>{post.content}</p>
                            <div >
                                { post.tags.map((tag, index) => (
                                    <span key={index} className='underline text-blue-700 mr-2 text-xs' >{`#${tag}`}</span>
                                ))}
                            </div>
                        </div>
                    ))
                )
            )}
        </div>
    );
}

export default Blogs;
