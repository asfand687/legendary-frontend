import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const AddUser = () => {
  const navigate = useNavigate()
  const [userInfo, setUserInfo] = useState({
    username: "",
    password: "",
    email: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data } = await axios.post("http://localhost:9000/api/users/register", {
      ...userInfo
    })
    navigate('/')
    setUserInfo({
      username: "",
      password: "",
      email: "",
    })
  }
  return (
    <div className="p-6 w-full max-w-4xl shadow-xl mx-auto mt-6">
      <h2 className="font-bold text-3xl pb-4">Add User</h2>
      <div className="bg-white border p-6 border-gray-200 rounded">
        <form onSubmit={handleSubmit}>
          <div className="pt-4">
            <input value={userInfo.username}
              onChange={({ target }) => setUserInfo({ ...userInfo, username: target.value })}
              className="input-focus w-full text-gray-700 outline-none px-3 py-1.5 border border-gray-200 focus:border-gray-300 rounded" placeholder="Username"
              required
            />
          </div>
          <div className="pt-4">
            <input value={userInfo.email}
              onChange={({ target }) => setUserInfo({ ...userInfo, email: target.value })}
              type="email"
              className="input-focus w-full text-gray-700 outline-none px-3 py-1.5 border border-gray-200 focus:border-gray-300 rounded"
              placeholder="Email"
              required
            />
          </div>
          <div className="py-4">
            <input value={userInfo.password}
              onChange={({ target }) => setUserInfo({ ...userInfo, password: target.value })}
              type="password"
              className="input-focus w-full text-gray-700 outline-none px-3 py-1.5 border border-gray-200 focus:border-gray-300 rounded"
              placeholder="Password"
              required
            />
          </div>
          <input className="px-6 py-2 outline-0 cursor-pointer font-semibold text-lg bg-emerald-500
           text-white rounded transition-opacity ease-in hover:opacity-90" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  )
}

export default AddUser