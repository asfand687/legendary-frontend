import React from 'react'
import { BiUser } from 'react-icons/bi'
import { useState } from 'react';
import axios from 'axios'
import Image from '../images/login-hero.svg'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const onUserLogin = async (e) => {
    e.preventDefault()
    const response = await axios.post('https://back.blackpenguin.site/api/users/login/', {
      email: formData.email,
      password: formData.password
    })
    localStorage.setItem('token', response.data.token)
    navigate('/')
  }

  const { email, password } = formData

  return (
    <div className="2xl:container flex items-center justify-center h-screen m-auto">
      <section className="w-full flex lg:max-w-4xl mx-auto bg-white shadow-2xl">
        <article className="flex items-center justify-center w-1/2 bg-gray-300 lg:p-8">
          <img className="w-full" src={Image} alt="login bg" />
        </article>
        <article className="flex-1 flex flex-col items-center lg:p-8">
          <div className="w-12 h-12 rounded-full bg-blue-900 inline-flex justify-center items-center">
            <BiUser className="text-white text-4xl" />
          </div>
          <h2 className="text-2xl font-bold text-center uppercase">Legendary</h2>
          <p className="my-2">Please enter your credentials to login.</p>
          <form onSubmit={onUserLogin} className="p-8 pt-6">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" >
                Username
              </label>
              <input
                value={email}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div><div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" >
                Password
              </label>
              <input value={password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password" />
            </div>
            <div className="mb-4">
              <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Sign In
              </button>
            </div>
          </form>
        </article>
      </section>
    </div>
  )
}

export default Login