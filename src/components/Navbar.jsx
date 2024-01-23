import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
        <spam className="logo">Quip Quirk</spam>
        <div className="user">
          <img src="https://images.pexels.com/photos/19295636/pexels-photo-19295636/free-photo-of-aerial-view-of-a-man-fishing-in-the-sea-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />  
          <span>Izzy</span>
          <button>Logout</button>
        </div>
    </div>
  )
}

export default Navbar