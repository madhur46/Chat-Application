import { IconButton } from '@mui/material'
import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
import {useSelector,useDispatch} from "react-redux";
import { AnimatePresence, anticipate, motion } from 'framer-motion';

export default function Creategroup() {
  const lightTheme=useSelector((state)=>state.themeKey);
  return (
    <AnimatePresence>
    <motion.div 
     initial={{opacity:0,scale:0}}
     animate={{opacity:1,scale:1}}
     exit={{opacity:0,scale:0}}
     transition={{
       ease:"anticipate",
       duration:'0.3',
      
     }}
     
    className='main-create-group-container'>
    <div  className={"create-group-container"  + (lightTheme?"" :" dark-theme")}>


                    <input placeholder="Enter group name"
                      className={"search-box"  + (lightTheme?"" :" dark-theme")}
                      style={{ width: '100%' }}/>



                    <IconButton className={(lightTheme?"" :" dark-theme")}>
                        <CheckIcon/>
                    </IconButton>
            </div> 
            </motion.div> 
            </AnimatePresence>
  )
}
