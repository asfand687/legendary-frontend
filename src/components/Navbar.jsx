import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  const signOutUser = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }
  const userLoggedIn = () => {
    const token = localStorage.getItem('token')
    return token ? true : false
  }
  return (
    <nav className="shadow-2xl w-full p-4 px-10 flex justify-between items-center">
      <h2 className="font-bold text xl uppercase">Legendary</h2>
      {
        userLoggedIn ? (
          <button onClick={signOutUser} type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Sign Out
          </button>
        ) : (
          <NavLink to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Sign In
          </NavLink>
        )
      }

    </nav>
  )
}

export default Navbar