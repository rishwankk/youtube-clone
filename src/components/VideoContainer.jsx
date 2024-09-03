import React, { useEffect, useState } from 'react'
import VideoCard, { AdVideoCard } from './VideoCard'
import { YOUTUBE_VIDEO_URL } from '../utils/constants'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
    const[video,setVideo]=useState([])
    useEffect(()=>{
    
        
        getVideo()
  
      },[])
  
      const getVideo=async()=>{
          const data=await fetch(YOUTUBE_VIDEO_URL)
          const result=await data.json()
          console.log(result);
          setVideo(result.items)
          
      }
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
  
      <AdVideoCard info={video[0]} />
{video.map((video)=>  <Link key={video.id} to={`/watch?v=${video.id}`}> <VideoCard info={video} /> </Link>    )}
      
    </div>
  )
}

export default VideoContainer