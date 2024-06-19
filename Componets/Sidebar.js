import React, { useState } from 'react'
import "./mainstyle.css";
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import Chatareaitems from './Chatareaitems';
import {useNavigate}  from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import { toggleTheme } from '../Features/themeSlice';


export default function Sidebar() {
  const navigate=useNavigate();
  const dispatch=useDispatch();
 
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

 

 
  return (
    <div className='sidebar-component'>
        
              <div className={"header "  + (lightTheme?"" :" dark-theme")}>


                <div className='account-circle'>
                <IconButton>
                
                      <AccountCircleIcon  className={"sb-icons "  + (lightTheme?"" :" dark-theme")}/>
                </IconButton>
                
                
                
                
                  <IconButton  onClick={()=>{navigate('users');}}>
                         <PersonAddAltIcon className={"sb-icons "  + (lightTheme?"" :" dark-theme")}/>
                  </IconButton>


              <IconButton  onClick={()=>{navigate('groups'); }}>
                     <GroupAddIcon className={"sb-icons "  + (lightTheme?"" :" dark-theme")}/>
              </IconButton>



              <IconButton  onClick={()=>{navigate('create-groups'); }}>
                  <AddCircleOutlineIcon className={"sb-icons "  + (lightTheme?"" :" dark-theme")}/>
              </IconButton>

              <IconButton onClick={()=>{dispatch(toggleTheme())}}>

                {lightTheme && <NightlightIcon className={"sb-icons "  + (lightTheme?"" :" dark-theme")}/>}
                {!lightTheme  && <LightModeIcon className={"sb-icons "  + (lightTheme?"" :" dark-theme")}/>}
              </IconButton>
                  </div>

                </div>



                
              <div className={"search "  + (lightTheme?"" :" dark-theme")}>

                <IconButton className={(lightTheme?"" :" dark-theme")}>
                  <SearchIcon/>
                </IconButton>

                <input placeholder="search" className={"search-box "  + (lightTheme?"" :" dark-theme")}/>
              </div>




              <div className={"sb-conversation "  + (lightTheme?"" :" dark-theme")}>
                  {conversations.map((conversation)=>(
                  
                     <Chatareaitems props={conversation}  key={conversation.name}  />
                  

                  ))}
                </div>

    </div>
  )
}
