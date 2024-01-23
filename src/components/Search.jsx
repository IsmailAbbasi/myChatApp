import React from 'react'

const Search = () => {
  return (
    <div className='search '>
        <div className="searchForm">
            <input type='text' placeholder='Find a user'></input>
        </div>
        <div className="userChat">
            <img src="https://images.pexels.com/photos/19139388/pexels-photo-19139388/free-photo-of-cafe-in-corner-tenement.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
            <div className="userChatInfo">
                <span>Izzy</span>
            </div>
        </div>
    </div>
  )
}

export default Search
