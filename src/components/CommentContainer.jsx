import React from 'react'
import { v4 as uuidv4 } from 'uuid';
    const commentData=[
        {name:"Rishwan",
         text:"Hello this is a good video",
         reply:[
            {name:"Rishwan",
                text:"Hello this is a good video",
                reply:[
                    {name:"Rishwan",
                        text:"Hello this is a good video",
                        reply:[
                            {name:"Rishwan",
                                text:"Hello this is a good video",
                                reply:[
                                   
                       
                                ]
                               }
                           
               
                        ]
                       }
                   
       
                ]
               }

         ]
        },
        {name:"Rishwan",
            text:"Hello this is a good video",
            reply:[
                {name:"Rishwan",
                    text:"Hello this is a good video",
                    reply:[
                        {name:"Rishwan",
                            text:"Hello this is a good video",
                            reply:[
                                {name:"Rishwan",
                                    text:"Hello this is a good video",
                                    reply:[
                                        {name:"Rishwan",
                                            text:"Hello this is a good video",
                                            reply:[
                                                {name:"Rishwan",
                                                    text:"Hello this is a good video",
                                                    reply:[
                                                       
                                           
                                                    ]
                                                   }
                                               
                                   
                                            ]
                                           }
                                       
                           
                                    ]
                                   }
                               
                   
                            ]
                           }
                       
           
                    ]
                   }
   
            ]
           },
           {name:"Rishwan",
            text:"Hello this is a good video",
            reply:[
               
   
            ]
           },
           {name:"Rishwan",
            text:"Hello this is a good video",
            reply:[
               
                {name:"Rishwan",
                    text:"Hello this is a good video",
                    reply:[
                        {name:"Rishwan",
                            text:"Hello this is a good video",
                            reply:[
                                {name:"Rishwan",
                                    text:"Hello this is a good video",
                                    reply:[
                                        {name:"Rishwan",
                                            text:"Hello this is a good video",
                                            reply:[
                                               
                                   
                                            ]
                                           }
                                       
                           
                                    ]
                                   }
                               
                   
                            ]
                           }
                       
           
                    ]
                   }
            ]
           }
    ]

    const Comment=({data})=>{
      
        const{name,text,reply}=data
       
        
     
        
        
           return(
            <div className="flex bg-gray-200 shadow-md my-2  ">
                <img className='h-9 mx-5 my-2' src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="user" />
                <div className=" ">
               <p className='pr-10 font-bold text-left'>{name}</p>
               <p></p>
               <p>{text}</p>

                </div>
               
            </div>
           )
    }


    const CommentList=({comments})=>{
        return comments.map((comment,index)=> (
        <div className="">
            <Comment key={uuidv4()} data={comment} />
            <div className=" border border-l-black ml-7">
                <CommentList comments={comment.reply} />
            </div>
            
            </div>
            ))
        


    }
 
const CommentContainer=()=>{
    return(
        <div className="">
            <h1>Comments :</h1>
           <CommentList comments={commentData} />
        </div>
    )
}

export default CommentContainer