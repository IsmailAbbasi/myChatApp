import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
       <div className="messageInfo">
       <img src="https://images.pexels.com/photos/19139388/pexels-photo-19139388/free-photo-of-cafe-in-corner-tenement.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
        <span>Just now</span>
       </div>
       <div className="messageContent">
        <p>Hello</p>
        <img src="https://images.pexels.com/photos/19139388/pexels-photo-19139388/free-photo-of-cafe-in-corner-tenement.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
        </div>
    </div>
  )
}

export default Message
