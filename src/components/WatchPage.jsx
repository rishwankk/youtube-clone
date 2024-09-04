import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { menuClose } from "../utils/sideBarSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";
import LiveChatContainer from "./LiveChatContainer";
import { generateName } from "../utils/helper";
import { addChat } from "../utils/chatSlice";
import ChatMessage from "./ChatMessage";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
 
  // console.log(searchParams.get("v"));



   

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(menuClose());
  }, []);
  return (
    <>
    
    <div className="flex flex-col">
    <div className="p-2">
      <iframe
        width="800"
        height="400"
        src={`https://www.youtube.com/embed/${searchParams.get("v")}?si=4EID9QK9QUSLQjTQ`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
    <div className=" ">
    
    <CommentContainer />
     
    </div>
    

    </div>
    <div className=" bg-slate-300 h-[400px] w-full p-2 m-2 rounded-lg overflow-y-scroll flex  flex-col-reverse  ">
     <ChatMessage />
      
      
    </div>
    
   
   
    </>
  );
};

export default WatchPage;
