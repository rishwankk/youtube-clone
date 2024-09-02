import React from 'react'
import Buttons   from './Buttons'
const buttonList=["All","Latest","Football","Cricket","Kabadi","Stock market","React","Love","Music","Dance"]

const ButtonList = () => {
  return (
    <div className='flex'>
        {buttonList.map((button)=>   <Buttons key={button}  name={button}  />)}

     
      
       

    </div>
  )
}

export default ButtonList