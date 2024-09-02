import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SideBar = () => {
    const sideBar=useSelector((store)=>store.sideBar.isOPenMenu)
    if(!sideBar)return null
  return (
    <div className='shadow-md w-48'>

            <h1 className='font-bold'><Link to="/" > Home</Link></h1>
            <h1 className='font-bold'>Short</h1>
            <h1 className='font-bold'>Subscriptions</h1>
            <h1 className='font-bold'>Explore</h1>
        <ul>
            <li>Trending</li>
            <li>Shopping</li>
            <li>Muisc</li>
            <li>News</li>
            <li>Gaming</li>
           
        </ul>
        <h1 className='font-bold'>Subscriptions</h1>
            <h1 className='font-bold'>Explore</h1>
        <ul>
            <li>Trending</li>
            <li>Shopping</li>
            <li>Muisc</li>
            <li>News</li>
            <li>Gaming</li>
           
        </ul>
    </div>
  )
}

export default SideBar