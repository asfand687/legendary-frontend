import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/userState'
import { ReactComponent as ChevronDown } from '../images/chevron-down.svg'



const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false)
  const { user } = useContext(UserContext)
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
      <div className="">
        <Link to="/"><img className="w-40" src={Logo} alt="logo" /></Link>
      </div>
      {
        userLoggedIn ? (
          <div className="flex relative items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 flex justify-center items-center rounded-full bg-red-500 text-white font-bold text-lg uppercase">
                {user.username.charAt(0)}
              </div>
              <strong>
                {user.username}
              </strong>
            </div>
            <span onClick={() => setShowDropdown(!showDropdown)} className="cursor-pointer">
              <ChevronDown />
            </span>
            <div className={`absolute border space-y-6 border-gray-300 flex flex-col p-6 items-center top-12 z-50 bg-white -right-10 w-56 shadow-2xl text-gray-700 font-semibold ${showDropdown ? "block" : "hidden"}`}>
              <Link onClick={() => setShowDropdown(false)} to="adduser">Add User</Link>
              <Link onClick={() => setShowDropdown(false)} to="addcategory">Add Category</Link>
              <Link onClick={() => setShowDropdown(false)} to="addposition">Add Position</Link>
              <Link onClick={() => setShowDropdown(false)} to="settings">Settings</Link>
              <button onClick={signOutUser} type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Sign Out
              </button>
            </div>
          </div>
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