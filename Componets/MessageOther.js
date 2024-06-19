import React from 'react';
import "./mainstyle.css";

export default function MessageOther() {
    var props1={name:"Someone",message:"HELLO,I WANT TO SAY SOMETHING...."}
  return (
    <div className='MessageOther-container'>
       <div className='conversation-container'>
        <p className='icon'>{props1.name[0]}</p>
            <div className='other-text-content'>
        <p className='title'>{props1.name} </p>
        <p className='lastmessage'>{props1.message}</p>
        <p className='self-timestamp'>12:30 am</p>
            </div>
        </div>
    </div>
  )
}
