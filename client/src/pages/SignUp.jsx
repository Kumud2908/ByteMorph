import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Signin from "./Signin";

export default function SignUp() {
  const [formData,setFormData]=useState({});
  const [loading,setloading]=useState(false);
  const [error,setError]=useState(null);
  const[success,setSuccess]=useState(false);
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value
    });

  }
  const handleSubmit=async(e)=>{
    e.preventDefault();
    setloading(true)
    setError(null);
    try{
      console.log(formData)
      setloading(true)
    const res=await fetch('/api/auth/signup',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',

      },
      body:JSON.stringify(formData),


    });
    const data=await res.json();
    if(res.status===201){
      setSuccess(true);
      setError(null);
    }else{
      setSuccess(false)
      setError(data.message||"Signup failed! !")
    }
    setloading(false)
   
    }catch(error){
      setloading(false);
      // setError(true);
    }
  }
  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7"
      >Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          id="username"
          className="bg-slate-100 p-3 rounded-lg border border-gray-300"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg border border-gray-300"
          onChange={handleChange}
        />
        <button type="form" disabled={loading} className="bg-blue-500 text-white p-3 rounded-lg
         hover:bg-blue-600 transition" onClick={handleSubmit} >

         
          {loading?'Loading...':'Sign Up'}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
      <p>Have an account?</p>
      <Link to="/signin">
      <span className='text-blue-500'>Sign In</span>
      </Link>
      {success ? <p className="text-green-500">sucessfully registered</p>:null}    
       {error ? <p className="text-red-500">{error}</p>:null}
      
      
    </div>
    </div>
  );

  
  
}
