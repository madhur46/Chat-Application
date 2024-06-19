import { IconButton } from '@mui/material'
import React, {useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import MessageOther from './MessageOther';
import MessageSelf from './MessageSelf';
import {useSelector,useDispatch} from "react-redux";
import { AnimatePresence, anticipate, motion } from 'framer-motion';

export default function Mainchatarea() {
  
  const lightTheme=useSelector((state)=>state.themeKey);

  const[conversations,setConversations]=useState([  
    {
      name: "text #1",
      lastMessage: "last message #1",
      timeStamp: "today",
    },

    {
      name:"text #2",
      lastMessage:"last message #2",
      timeStamp:"today",
    },

    {
      name:"text #3",
      lastMessage:"last message #3",
      timeStamp:"today",
    },
    
  ]);

  var props=conversations[0];
  return (
    <motion.div
    initial={{opacity:0,scale:0}}
    animate={{opacity:1,scale:1}}
    exit={{opacity:0,scale:0}}
    transition={{
      ease:"anticipate",
      duration:'0.3',
     
    }}

     className='mainchatarea-container'>
        <div  className={"mainchatarea-header"  + (lightTheme?"" :" dark-theme")}>
            <p className='icon'>{props.name[0]}</p>
              <div className='header-text'>


                <p className={"title"  + (lightTheme?"" :" dark-theme")}>{props.name}</p>
                <p className={"timestamp"  + (lightTheme?"" :" dark-theme")}>{props.timeStamp}</p>
              </div>
              <IconButton>
                <DeleteIcon/>
              </IconButton>
        
        
        
        
        </div>


       
        <div  className={"mainchatarea-messages"  + (lightTheme?"" :" dark-theme")}>
        <MessageOther/>
        <MessageSelf/>
        <MessageOther/>
        <MessageSelf/>
        <MessageOther/>
        <MessageSelf/>
        </div>



           <div  className={"mainchatarea-text-input"  + (lightTheme?"" :" dark-theme")}>
                    <input placeholder="Type your text here" className={'search-box'  + (lightTheme?"" :" dark-theme")}/>
                    <IconButton className={(lightTheme?"" :" dark-theme")}>
                        <SendIcon/>
                    </IconButton>
            </div>      
    </motion.div>
  )
}
