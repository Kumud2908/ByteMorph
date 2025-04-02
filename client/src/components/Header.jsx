import React from 'react'
import {Link} from 'react-router-dom'


export default function Header() {
  return (
    <nav className="bg-slate-200 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="font-bold text-xl">Auth App</h1>
        <ul className="flex gap-6 text-lg">
          <li>
            <Link to="/" className="hover:text-blue-500">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500">About</Link>
          </li>
          <li>
            <Link to="/signin" className="hover:text-blue-500">Sign-in</Link>
          </li>
          <li>
            <Link to="/signup" className="hover:text-blue-500">Sign-Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

