// import React,{useState,useContext} from 'react'
// import { collection, query, where ,getDocs} from "firebase/firestore";
// import {db} from "../firebase"
// import {AuthContext} from "../context/AuthContext"
// import { setDoc,getDoc,updateDoc, serverTimestamp ,doc} from 'firebase/firestore';


// const Search = () => {
//   const [username,setUsername] = useState("")
//   const[user,setUser] =useState(null)
//   const[err,setErr] =useState(false)

//   const {currentUser} = useContext(AuthContext)

//   const handleSearch = async () => {
//     const q = query(
//       collection(db,"users"),
//       where("displayName","==",username)
//       );

//       try{
//     const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   setUser(doc.data())
// });
//       } catch (err){
//         setErr(true)
//       }
//   };

//   const handleKey = e => {
//     e.code === "Enter" && handleSearch();
//   };
  
//   const handleSelect =  async() => {
//     const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid
//     try{
//     const res = await getDoc(doc(db,"chats",combinedId))

//     if(!res.exists()){
//      await setDoc(doc(db,"chats",combinedId),{messages:[]})

//     await updateDoc(doc(db,"usersChats",currentUser.uid),{
//       [combinedId+".userInfo"]: {
//         uid:user.uid,
//         displayName: user.displayName,
//         photoURL: user.photoURL
//       },
//       [combinedId+".date"]: serverTimestamp()
//     });

//     await updateDoc(doc(db,"usersChats",user.uid),{
//       [combinedId]: {
//         userInfo: {
//         uid:currentUser.uid,
//         displayName: currentUser.displayName,
//         photoURL: currentUser.photoURL,
//       },
//       // [combinedId+".date"]: serverTimestamp()
//       date: serverTimestamp(),
//     },
//     });
    
//     }
//     } catch (error) {
//       console.error("Error during handleSelect:", error);

//     }
//     setUser(null)
//     setUsername("")
//   }
  
//   return (
//     <div className='search '>
//         <div className="searchForm">

//             <input type='text' placeholder='Find a user' onKeyDown={handleKey} onChange={e=>setUsername(e.target.value)}
//             value={username}
//             />
//         </div>
//         {err && <span>User not found</span>}
//         { user && <div className="userChat" onClick={handleSelect}>
//             <img src={user.photoURL} alt=""  />
//             <div className="userChatInfo">
//                 <span>{user.displayName}</span>
//             </div>
//         </div>}
//     </div>
//   )
// }

// export default Search


// import React, { useContext, useState } from "react";
// import {
//   collection,
//   query,
//   where,
//   getDocs,
//   setDoc,
//   doc,
//   updateDoc,
//   serverTimestamp,
//   getDoc,
// } from "firebase/firestore";
// import { db } from "../firebase";
// import { AuthContext } from "../context/AuthContext";
// const Search = () => {
//   const [username, setUsername] = useState("");
//   const [user, setUser] = useState(null);
//   const [err, setErr] = useState(false);

//   const { currentUser } = useContext(AuthContext);

//   const handleSearch = async () => {
//     const q = query(
//       collection(db, "users"),
//       where("displayName", "==", username)
//     );

//     try {
//       const querySnapshot = await getDocs(q);
//       querySnapshot.forEach((doc) => {
//         setUser(doc.data());
//       });
//     } catch (err) {
//       setErr(true);
//     }
//   };

//   const handleKey = (e) => {
//     // e.code === "Enter" && handleSearch();
//     e.key === "Enter" && handleSearch();
//   };

//   const handleSelect = async () => {
  
//     const combinedId =
//       currentUser.uid > user.uid
//         ? currentUser.uid + user.uid
//         : user.uid + currentUser.uid;
//     try {
//       const res = await getDoc(doc(db, "chats", combinedId));

//       if (!res.exists()) {
        
//         await setDoc(doc(db, "chats", combinedId), { messages: [] });

        
//         await updateDoc(doc(db, "userChats", currentUser.uid), {
//           [combinedId + ".userInfo"]: {
//             uid: user.uid,
//             displayName: user.displayName,
//             photoURL: user.photoURL,
//           },
//           [combinedId + ".date"]: serverTimestamp(),
//         });

//         await updateDoc(doc(db, "userChats", user.uid), {
//           [combinedId + ".userInfo"]: {
//             uid: currentUser.uid,
//             displayName: currentUser.displayName,
//             photoURL: currentUser.photoURL,
//           },
//           [combinedId + ".date"]: serverTimestamp(),
//         });
//       }
//     } catch (err) {}

//     setUser(null);
//     setUsername("")
//   };
//   return (
//     <div className="search">
//       <div className="searchForm">
//         <input
//           type="text"
//           placeholder="Find a user"
//           onKeyDown={handleKey}
//           onChange={(e) => setUsername(e.target.value)}
//           value={username}                              
//         />
//       </div>
//       {err && <span>User not found!</span>}
//       {user && (
//         <div className="userChat" onClick={handleSelect}>
//           <img src={user.photoURL} alt="" />
//           <div className="userChatInfo">
//             <span>{user.displayName}</span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Search;


// import React, { useContext, useState } from "react";
// import {
//   collection,
//   query,
//   where,
//   getDocs,
//   setDoc,
//   doc,
//   updateDoc,
//   serverTimestamp,
//   getDoc,
// } from "firebase/firestore";
// import { db } from "../firebase";
// import { AuthContext } from "../context/AuthContext";

// const Search = () => {
//   const [username, setUsername] = useState("");
//   const [user, setUser] = useState(null);
//   const [err, setErr] = useState(false);
//   let typingTimeout = null; // Debounce timeout variable

//   const { currentUser } = useContext(AuthContext);

//   const handleSearch = async () => {
//     const q = query(
//       collection(db, "users"),
//       where("displayName", "==", username)
//     );

//     try {
//       const querySnapshot = await getDocs(q);
//       querySnapshot.forEach((doc) => {
//         setUser(doc.data());
//       });
//     } catch (err) {
//       setErr(true);
//     }
//   };

//   const handleChange = (e) => {
//     setUsername(e.target.value);
//     clearTimeout(typingTimeout);
//     typingTimeout = setTimeout(handleSearch, 500);
//   };

//   const handleKeyUp = (e) => {
//     if (e.key === "Enter") {
//       handleSearch();
//     }
//   };

//   const handleSelect = async () => {
//     const combinedId =
//       currentUser.uid > user.uid
//         ? currentUser.uid + user.uid
//         : user.uid + currentUser.uid;
//     try {
//       const res = await getDoc(doc(db, "chats", combinedId));

//       if (!res.exists()) {
//         await setDoc(doc(db, "chats", combinedId), { messages: [] });

//         await updateDoc(doc(db, "userChats", currentUser.uid), {
//           [combinedId + ".userInfo"]: {
//             uid: user.uid,
//             displayName: user.displayName,
//             photoURL: user.photoURL,
//           },
//           [combinedId + ".date"]: serverTimestamp(),
//         });

//         await updateDoc(doc(db, "userChats", user.uid), {
//           [combinedId + ".userInfo"]: {
//             uid: currentUser.uid,
//             displayName: currentUser.displayName,
//             photoURL: currentUser.photoURL,
//           },
//           [combinedId + ".date"]: serverTimestamp(),
//         });
//       }
//     } catch (err) {}

//     setUser(null);
//     setUsername("");
//   };

//   return (
//     <div className="search">
//       <div className="searchForm">
//         <input
//           type="text"
//           placeholder="Find a user"
//           onChange={handleChange}
//           onKeyUp={handleKeyUp} // Add onKeyUp event handler
//           value={username}
//         />
//       </div>
//       {err && <span>User not found!</span>}
//       {user && (
//         <div className="userChat" onClick={handleSelect}>
//           <img src={user.photoURL} alt="" />
//           <div className="userChatInfo">
//             <span>{user.displayName}</span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Search;




// ...


import React, { useContext, useState } from "react";
import {
  collection,
  query,
  where,
  getDocs,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { AuthContext } from "../context/AuthContext";

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false); // State for loading

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    setLoading(true); // Set loading to true when search starts

    try {
      const q = query(
        collection(db, "users"),
        where("displayName", "==", username)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
      // Clear error state if search is successful
      setErr(false);
    } catch (err) {
      // Set error state if an error occurs during search
      setErr(true);
    } finally {
      setLoading(false); // Set loading to false when search is complete
    }
  };

  const handleChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSearchButtonClick = () => {
    handleSearch();
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSelect = async () => {
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid;
    try {
      const res = await getDoc(doc(db, "chats", combinedId));

      if (!res.exists()) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {}

    setUser(null);
    setUsername("");
  };

  return (
    <div className="search">
      <div className="searchForm">
        <input
          type="text"
          placeholder="Find a user"
          onChange={handleChange}
          onKeyUp={handleKeyUp} // Add onKeyUp event handler
          value={username}
        />
         <button onClick={handleSearchButtonClick}>Search</button>
        {loading && <span>Loading...</span>}
      </div>
      {err && <span>User not found!</span>}
      {user && (
        <div className="userChat" onClick={handleSelect}>
          <img src={user.photoURL} alt="" />
          <div className="userChatInfo">
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
