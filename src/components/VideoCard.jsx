    import React  from 'react'


    const VideoCard = ({info}) => {
    
        const snippet=info?.snippet
        const statistics=info?.statistics
        const channelTitle=snippet?.channelTitle;
        const title=snippet?.title
        const thumbnails=snippet?.thumbnails
        const views=statistics?.viewCount
        console.log(views);
        
        
        
    
    
        
        
        // const{snippet}=info
        // console.log(snippet,"thiss");
        
        // const{channelTitle,thumbnails}=snippet
        // const{viewCount}=statistics
    


    
        

    
    return (
        <div className='  shadow-lg  p-2 w-64'>
        <div className="h-52">
    <img src={thumbnails?.medium?.url} className='rounded-lg w-full  object-cover' alt="thumbnail" />
    <ul className='mt-2'>
        <li className='text-sm font-semibold truncate'>{title}</li>
        <div className="flex justify-between text-xs text-gray-500 mt-1">
        <li className=' text-xs '>{channelTitle}</li>
        <li className='font-bold text-sm'>{views}views</li>

        </div>
    </ul>

        </div>
        </div>
    )
    }

    export default VideoCard