import React from 'react'
import { v4 as uuidv4 } from 'uuid';
    const commentData=[
        {id:1,
            name:"Rishwan",
         text:"Hello this is a good video",
         reply:[
            {
                id:2,name:"Rishwan",
                text:"Hello this is a good video",
                reply:[
                    {id:3,name:"Rishwan",
                        text:"Hello this is a good video",
                        reply:[
                            {id:4,name:"Rishwan",
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
        {id:5,name:"Rishwan",
            text:"Hello this is a good video",
            reply:[
                {id:6,name:"Rishwan",
                    text:"Hello this is a good video",
                    reply:[
                        {id:7,name:"Rishwan",
                            text:"Hello this is a good video",
                            reply:[
                                {id:8,name:"Rishwan",
                                    text:"Hello this is a good video",
                                    reply:[
                                        {id:9,name:"Rishwan",
                                            text:"Hello this is a good video",
                                            reply:[
                                                {id:10,name:"Rishwan",
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
           {id:11,name:"Rishwan",
            text:"Hello this is a good video",
            reply:[
               
   
            ]
           },
           {id:12,name:"Rishwan",
            text:"Hello this is a good video",
            reply:[
               
                {id:13,name:"Rishwan",
                    text:"Hello this is a good video",
                    reply:[
                        {id:14,name:"Rishwan",
                            text:"Hello this is a good video",
                            reply:[
                                {id:15,name:"Rishwan",
                                    text:"Hello this is a good video",
                                    reply:[
                                        {id:16,name:"Rishwan",
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
        return comments.map((comment)=> (
        <div className=""  key={comment.id}>
            <Comment data={comment} />
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