import React from 'react'

export default function MessageSelf() {
    var props2={name:"Me",message:"What,Really?"}
  return (
    <div className='self-message-container'>
          <div className='message-box'>
               
              <p>{props2.message}</p>
              <p className='self-timestamp'>12:00am</p>

          </div>
    </div>
  )
}
