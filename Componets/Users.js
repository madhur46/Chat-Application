import React from 'react';
import "./mainstyle.css";
import online_users from "../images/online-recruitment.png";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material';
import {useNavigate}  from "react-router-dom";
import {useSelector,useDispatch} from "react-redux";
import { toggleTheme } from '../Features/themeSlice';
import { AnimatePresence, anticipate, motion } from 'framer-motion';


export default function Users_Groups() {
  const lightTheme=useSelector((state)=>state.themeKey);
  return (
    <motion.div
    initial={{opacity:0,scale:0}}
    animate={{opacity:1,scale:1}}
    exit={{opacity:0,scale:0}}
    transition={{
      ease:"anticipate",
      duration:'0.3',
     
    }} 
    
    
    className=" Users-groups-container" >
              <div className={" Users-groups-header"  + (lightTheme?"" :" dark-theme")}>
                 <img className={" ug-image"  + (lightTheme?"" :" dark-theme")}
                 src={online_users} alt='ug_online' 
                 style={{height:"2rem",width:"2rem"}}/>

                 <p className={" ug-title"  + (lightTheme?"" :" dark-theme")}> Online Users</p>
              </div>


             
                      <div className={"search"  + (lightTheme?"" :" dark-theme")}>

                            <IconButton className={(lightTheme?"" :" dark-theme")}>
                              <SearchIcon/>
                            </IconButton>

                      <input placeholder="search" className={" search-box"  + (lightTheme?"" :" dark-theme")}/>
                        </div>
              



              <div className='Users-groups-list'>

                   <motion.div
                   whileHover={{scale:1.01}}
                   whileTap={{scale:0.98}} 
                   className={"list-items"  + (lightTheme?"" :" dark-theme")}>
                    <p className='icon'> T</p>
                    <p className={"title"  + (lightTheme?"" :" dark-theme")}>USERNAME</p>
                   </motion.div>

                   <motion.div
                   whileHover={{scale:1.01}}
                   whileTap={{scale:0.98}} 
                   className={"list-items"  + (lightTheme?"" :" dark-theme")}>
                    <p className='icon'> T</p>
                    <p className={"title"  + (lightTheme?"" :" dark-theme")}>USERNAME</p>
                   </motion.div>

                   <motion.div
                   whileHover={{scale:1.01}}
                   whileTap={{scale:0.98}} 
                   className={"list-items"  + (lightTheme?"" :" dark-theme")}>
                    <p className='icon'> T</p>
                    <p className={"title"  + (lightTheme?"" :" dark-theme")}>USERNAME</p>
                   </motion.div>

                   <motion.div
                   whileHover={{scale:1.01}}
                   whileTap={{scale:0.98}} 
                   className={"list-items"  + (lightTheme?"" :" dark-theme")}>
                    <p className='icon'> T</p>
                    <p className={"title"  + (lightTheme?"" :" dark-theme")}>USERNAME</p>
                   </motion.div>

                   <motion.div
                   whileHover={{scale:1.01}}
                   whileTap={{scale:0.98}} 
                   className={"list-items"  + (lightTheme?"" :" dark-theme")}>
                    <p className='icon'> T</p>
                    <p className={"title"  + (lightTheme?"" :" dark-theme")}>USERNAME</p>
                   </motion.div>

                   <motion.div
                   whileHover={{scale:1.01}}
                   whileTap={{scale:0.98}} 
                   className={"list-items"  + (lightTheme?"" :" dark-theme")}>
                    <p className='icon'> T</p>
                    <p className={"title"  + (lightTheme?"" :" dark-theme")}>USERNAME</p>
                   </motion.div>

                   <motion.div
                   whileHover={{scale:1.01}}
                   whileTap={{scale:0.98}} 
                   className={"list-items"  + (lightTheme?"" :" dark-theme")}>
                    <p className='icon'> T</p>
                    <p className={"title"  + (lightTheme?"" :" dark-theme")}>USERNAME</p>
                   </motion.div>

              </div>
    </motion.div>
  )
}
