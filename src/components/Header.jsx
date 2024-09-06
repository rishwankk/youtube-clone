import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggeleMenu } from '../utils/sideBarSlice'
import { YOUTUBE_SEARCH_API } from '../utils/constants'
import { cachedSearch } from '../utils/searchSlice'
import { Link } from 'react-router-dom'

const Header = () => {
    const dispatch=useDispatch()
    const [searchQuery,setSearchQuery]=useState("")
    const[searchData,setSearchData]=useState([])
    const searchCache=useSelector((store)=>store.search)
    const [showSuggestions,setShowSuggestions]=useState(true)
  
    
    const handleMenu=()=>{
        dispatch(toggeleMenu())

    }

useEffect(()=>{
 const timer=   setTimeout(() => {
    if(searchCache[searchQuery]){
        setSearchData(searchCache[searchQuery])
    }else{
        getSuggestion()
      

    }
  }, 300);

return()=>{
    clearTimeout(timer)
}

},[searchQuery])

const getSuggestion=async()=>{
    const data=await fetch(YOUTUBE_SEARCH_API+searchQuery)
    const result=await data.json()
    // console.log(result[1]);
    setSearchData(result[1]||[])
    dispatch(cachedSearch({
        [searchQuery]:result[1]||[]
    }))
    

}
const handleBlur = () => {
    setTimeout(() => {
        setShowSuggestions(false);
    }, 200);


}


  return (
    <div className=' grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className="flex col-span-1">
            <img className='h-10 cursor-pointer' src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256" alt="hamberg-menu" onClick={handleMenu} />
            <img className='h-12 -m-1 mx-2 ' src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg" alt="logo" />
        </div>
        <div className="col-span-10  text-center ">
            <input type="text" placeholder='Search  ' className='w-1/2 border border-gray-500 p-2 rounded-l-full '  value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)} onBlur={handleBlur} onFocus={()=>setShowSuggestions(true)} />
            <button className='border border-gray-500 p-2 rounded-r-full bg-gray-300 hover:bg-gray-400'>🔍</button>
            {showSuggestions&& 
            <div className="bg-white  w-[28rem] ml-[12.5rem] rounded-lg shadow-md absolute">
                <ul className='text-left '>
                {searchData.map((result) => (
                            <Link to={`/search?v=${result}`} key={result}>
                                <li className='p-2 m-2 shadow-sm hover:bg-gray-200'  onMouseDown={(e) => e.preventDefault()} >🔍 {result}</li>
                            </Link>
                        ))}

                   
                  
                </ul>
            </div> 
            }
        </div>
        <div className="col-span-1">
            <img className='h-9' src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="user" />
        </div>

    </div>
  )
}

export default Header