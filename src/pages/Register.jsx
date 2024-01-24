import React from 'react'
import Add from "../img/gallery.png"

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='formContainer'>
    <div className='formWrapper'> 
    <span className="logo">Quip Quirk</span>
    <span className="logo">Register</span>
    <form onSubmit={handleSubmit}>
        <input type ="text" placeholder="display name"/>
        <input type ="email" placeholder="email"/>
        <input type ="password" placeholder="password"/>
         <input style={{display:"none"}} type ="file" id="file"/>
         <label htmlFor="file">
    <img src={Add} alt="" />
    <span>Add an Avatar</span>
         </label>
        <button>Sign Up</button>
    </form>
    <p>You do have an account? Login</p>
    </div>
    </div>
  )
}

export default Register
