import React from 'react';
import {useNavigate}  from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";

export default function Chatareaitems({props}) {
  const lightTheme=useSelector((state)=>state.themeKey);
  
  const navigate=useNavigate();
  return (
    <div className='conversation-container' onClick={()=>{navigate('chats')}} >
        <p className='icon'>{props.name[0]}</p>
        <p className={"title"  + (lightTheme?"" :" dark-theme")}>{props.name} </p>
        <p className='lastmessage'>{props.lastMessage}</p>
        <p className={"timestamp"  + (lightTheme?"" :" dark-theme")}>{props.timeStamp}</p>
       
    </div>
  )
}

