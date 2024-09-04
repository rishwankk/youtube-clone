import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'


const LiveChatContainer = ({name,text}) => {
   

    
    return (
    <div className='flex p-2 '>
           
           <img className='h-9 rounded-full' src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="user" />
       <div className="mx-2 flex">
       
            <div className=" " >

                <p className='mx-2 my-1'>{name} </p>
                <p className='font-bold my-1'>{text}</p>
            </div>

     

       </div>
       
    </div>
    
  )
}

export default LiveChatContainer