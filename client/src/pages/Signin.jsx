import React from 'react'
import {Link} from 'react-router-dom'

export default function Signin() {
  return (
    <div className="p-6 max-w-lg mx-auto">
    <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
    <form className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Username"
        id="username"
        className="bg-slate-100 p-3 rounded-lg border border-gray-300"
      />
      <input
        type="password"
        placeholder="Password"
        id="password"
        className="bg-slate-100 p-3 rounded-lg border border-gray-300"
      />
      <button className="bg-slate-700 text-white p-3 rounded-lg
       uppercase hover:opacity-95 disabled:opacity-80">
        Sign In
      </button>
    </form>
    
  </div>
  )
}

