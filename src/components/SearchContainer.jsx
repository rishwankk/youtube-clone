import React, { useEffect, useState } from 'react'
import {  Link, useSearchParams } from 'react-router-dom'
import VideoCard from './VideoCard'

const SearchContainer = () => {
    const[video,setVideo]=useState([])
    const[searchParams]=useSearchParams()
    // console.log(searchParams.get("v"));
    
    useEffect(()=>{
        searchDatas()

    },[])

    const searchDatas=async()=>{
        const data= await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${searchParams}&type=video&key=${process.env.REACT_APP_GOOGLE_API}`)
        const result=await data.json()
        // console.log(result);
        setVideo(result.items)
        
    
    }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
  
   
{video.map((video,index)=>  <Link key={index} to={`/watch?v=${video?.id?.videoId}`}> <VideoCard info={video} /> </Link>    )}
    
  </div>
  )
}

export default SearchContainer