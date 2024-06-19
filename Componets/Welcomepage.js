import React from 'react';
import "./mainstyle.css";
import chatapplogo from  "../images/chatapplogo.jpeg"


export default function Welcomepage() {
  return (
    <div className='Welcomepage-container'>
   <img src={chatapplogo} alt="logo" className='welcome-logo'/>
   <p>Now chat freely with anyone,anytime and anywhere in the world</p>
      
    </div>
  )
}
