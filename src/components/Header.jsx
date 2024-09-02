import React from 'react'
import { useDispatch } from 'react-redux'
import { toggeleMenu } from '../utils/sideBarSlice'

const Header = () => {
    const dispatch=useDispatch()
    const handleMenu=()=>{
        dispatch(toggeleMenu())

    }
  return (
    <div className=' grid grid-flow-col p-5 m-2 shadow-lg'>
        <div className="flex col-span-1">
            <img className='h-10 cursor-pointer' src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-icon-download-in-svg-png-gif-file-formats--crispy-user-interface-pack-icons-462145.png?f=webp&w=256" alt="hamberg-menu" onClick={handleMenu} />
            <img className='h-12 -m-1 mx-2 ' src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg" alt="logo" />
        </div>
        <div className="col-span-10  text-center ">
            <input type="text" placeholder='Search  ' className='w-1/2 border border-gray-500 p-2 rounded-l-full text-center' />
            <button className='border border-gray-500 p-2 rounded-r-full bg-gray-300 hover:bg-gray-400'>🔍</button>
        </div>
        <div className="col-span-1">
            <img className='h-9' src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="user" />
        </div>

    </div>
  )
}

export default Header