import React ,{useState} from 'react'
import "./mainstyle.css";
import Sidebar from './Sidebar';
import Mainchatarea from './Mainchatarea';
import Welcomepage from './Welcomepage';
import Creategroup from './Creategroup';
import Users_Groups from './Users';
import {Outlet} from "react-router-dom";



export default function Maincomponent() {
  return (
    <div className='main-component'>
      <Sidebar/>
      <Outlet/>

      {/* <Welcomepage/> */}
      {/* <Creategroup/> */}
      {/* <Mainchatarea props={conversations[0]}/> */}
      {/* <Users_Groups/> */}
    </div>
  )
}
