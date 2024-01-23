import React from "react";
import Cam from "../img/videocalling.png";
import Add from "../img/addfriend.png";
import More from "../img/morelogo.png";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className='chat'>
        <div className="chatInfo">
            <span>Izzy</span>
            <div className="chatIcons">
                <img src={Cam} alt="" />
                <img src={Add} alt="" />
                <img src={More} alt="" />
            </div>
        </div>
            <Messages/>
            <Input/>
    </div>
  )
}

export default Chat
