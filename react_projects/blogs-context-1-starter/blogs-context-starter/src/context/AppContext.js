import { createContext } from "react";
import { useState } from 'react';
import { baseUrl } from "../baseUrl";
import React from 'react';



export const AppContext=createContext() ;

export default function AppContextProvider({children}){
    const [Loading, setLoading] = useState(false) ;
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [totalPages, settotalPages] = useState(null) ;

    async function fetchBlogPosts(page)
    {
        setLoading(true);
    let url = `${baseUrl}?page=${page}`; // Corrected string interpolation
    try {
        const result = await fetch(url);
        if (!result.ok) {
            throw new Error(`HTTP error! status: ${result.status}`);
        }
        const data = await result.json();
        console.log('Fetched data:', data);
        settotalPages(data.totalPages);
        setPage(data.page);
        setPosts(data.posts);
    } catch (error) {
        console.error('Error fetching blog posts:', error);
    } finally {
        setLoading(false);
    }
    }
        
   function HandlePageChange(page)
   {
        setPage(page) ;
        fetchBlogPosts(page) ;   
   }

    const value={
        Loading, setLoading,totalPages, settotalPages,page, setPage,posts, setPosts ,HandlePageChange,fetchBlogPosts
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}