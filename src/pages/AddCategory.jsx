import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddCategory = () => {
  const navigate = useNavigate()
  const [categoryInfo, setCategoryInfo] = useState({
    title: "",
    products: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data } = await axios.post("https://back.blackpenguin.site/api/category", {
      ...categoryInfo
    })
    console.log(data)
    navigate('/')
    setCategoryInfo({
      title: "",
      products: ""
    })
  }
  return (
    <div className="p-6 w-full max-w-4xl shadow-xl mx-auto mt-6">
      <h2 className="font-bold text-3xl pb-4">Add User</h2>
      <div className="bg-white border p-6 border-gray-200 rounded">
        <form onSubmit={handleSubmit}>
          <div className="py-4">
            <input value={categoryInfo.title}
              onChange={({ target }) => setCategoryInfo({ ...categoryInfo, title: target.value })}
              className="input-focus w-full text-gray-700 outline-none px-3 py-1.5 border border-gray-200 focus:border-gray-300 rounded" placeholder="Title"
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

export default AddCategory