import React, { useEffect, useState } from 'react'
import { addChat } from '../utils/chatSlice';
import { generateName } from '../utils/helper';
import LiveChatContainer from './LiveChatContainer';
import { useDispatch, useSelector } from 'react-redux';

const ChatMessage = () => {
    const ChatData=useSelector((store)=>store?.chat?.liveChat)
    const[sendMessage,setSendMessage]=useState()
    const dispatch = useDispatch();
    useEffect(()=>{

        const interval=  setInterval(() => {
              dispatch(addChat({
                  name:generateName(),
                  text:"Hello this from redux store"
              }))
              
              
          }, 1500);
  
          return () => clearInterval(interval);
      },[])

      const handleInputChange = (e) => {
        setSendMessage(e.target.value);
      };
    
      const handleSendMessage = () => {
        if (sendMessage.trim()) {
          dispatch(
            addChat({
              name: "You",
              text: sendMessage,
            })
          );
          setSendMessage(""); 
        }
      };
  return (
  
    <div className=" py-5 shadow-md ">
        <div className="">
    {ChatData.map((c,i)=><LiveChatContainer key={i} name={c.name} text={c.text}  />)}

        </div>
        <form onSubmit={(e)=>e.preventDefault()}>
        <div className="border border-black p-2 ml-2 w-full flex ">
            <input type="text" className='w-96' value={sendMessage} onChange={handleInputChange}  />
            <button className='bg-blue-400   ' onClick={handleSendMessage}>Send</button>

        </div>
        </form>
  
 
 
  </div>
  )
}

export default ChatMessage