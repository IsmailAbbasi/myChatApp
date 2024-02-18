// import React from 'react'
// import {useState} from 'react'
// import Add from "../img/gallery.png"
// import { createUserWithEmailAndPassword ,updateProfile } from "firebase/auth";
// import { auth ,storage, db } from "../firebase";
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { doc, setDoc } from "firebase/firestore"; 
// import {useNavigate,Link} from "react-router-dom"



// const Register = () => {
//   const [err,setErr] = useState(false)
// const navigate =useNavigate()

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const displayName = e.target[0].value;
//     const email = e.target[1].value;
//     const password = e.target[2].value;
//     const file = e.target[3].files[0];

//     try {
//     const res = await createUserWithEmailAndPassword(auth, email, password)
//     const storageRef = ref(storage, displayName);
//     const uploadTask = uploadBytesResumable(storageRef, file);

//     uploadTask.on(  
//       (error) => {
//       setErr(true);
// }, 
//   () => {
    
//     getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL) => {

//     await updateProfile(res.user,{

//       displayName,
//       photoURL:downloadURL,
//     });   
    
//     await setDoc(doc(db,"users",res.user.uid),{
//       uid:res.user.uid,
//       displayName,
//       email,
//       photoURL:downloadURL,
//     });
//     await setDoc(doc(db , "userChats",res.user.uid),{});
//     navigate("/")
     
//  });
//   }
// );

//     }catch(err){

// setErr(true)
//     }
//   };
//   return (
//     <div className='formContainer'>
//     <div className='formWrapper'> 
//     <span className="logo">Quip Quirk</span>
//     <span className="logo1">Register</span>
//     <form onSubmit={handleSubmit}>
//         <input type ="text" placeholder="display name"/>
//         <input type ="email" placeholder="email"/>
//         <input type ="password" placeholder="password"/>
//          <input style={{display:"none"}} type ="file" id="file"/>
//          <label htmlFor="file">
//     <img src={Add} alt="" />
//     <span>Add an Avatar</span>
//          </label>
//         <button>Sign Up</button>
//      {err && <span>Something went Wrong</span>}   
//     </form>
//     <p>You do have an account? <Link to="/register">Login</Link></p>
//     </div>
//     </div>
//   )
// }

// export default Register

import React, { useState } from "react";
import Add from "../img/gallery.png"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const [message, setMessage] = useState("")
  const [form, setForm] = useState({
    email: "",
    password: ""
  })
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = form.email;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {

            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, "userChats", res.user.uid), {});
            navigate("/");
          } catch (err) {
            console.log(err);
            setErr(true);
            setLoading(false);
          }
        });
      });
    } catch (err) {
      setErr(true);
      setLoading(false);
    }
  };


  const handleChange = (e) => {
    if(e.target.name === "password") {
      if(e.target.value.length < 8) {
        setMessage("Password is too short")
      }
    }
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }


  return (
    <div className="formContainer">
      {/* {JSON.stringify(form)} */}
      <div className="formWrapper">
        <div>{message}</div>
        <span className="logo">Quick Quirk</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="display name"    />
          <input required name="email" type="email" placeholder="email" value={form.email} onChange={(e) => handleChange(e)} />
          <input required name="password" type="password" placeholder="password" value={form.password} onChange={(e) => handleChange(e)} />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>
          <button disabled={loading}>Sign up</button>
          {loading && "Uploading and compressing the image please wait..."}
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          You do have an account? <Link to="/register">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;