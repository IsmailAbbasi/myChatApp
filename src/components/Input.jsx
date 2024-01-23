import React from 'react'
import Img from "../img/imgg.png"
import Attach from "../img/atc.png"
const Input = () => {
  return (
    <div className='input'>
        <input type="text" placeholder='Type Something...'/> 
        <div className="send">
            <img src={Attach} alt="" />
            <input type="file" style={{display:"none"}} id="file"/>
            <label htmlFor="file">
                <img src={Img} alt="" />
            </label>
            <button>Send</button>
        </div>
    </div>
  )
}

export default Input
