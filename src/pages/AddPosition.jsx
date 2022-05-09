import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



const AddPosition = () => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState("")
  const [categories, setCategories] = useState([])
  const [positionInfo, setPositionInfo] = useState({
    title: "",
    price: ""
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { data } = await axios.put("https://back.blackpenguin.site/api/category/addPosition", {
      positionInfo,
      categoryId: selectedCategory
    })
    console.log("DATA", data)
    navigate('/')
    setPositionInfo({
      title: "",
      products: ""
    })
  }

  const getCategories = async () => {
    const { data } = await axios.get("https://back.blackpenguin.site/api/category")
    setCategories(data)
  }

  useEffect(() => {
    getCategories()
  }, [])
  return (
    <div className="p-6 w-full max-w-4xl shadow-xl mx-auto mt-6">
      <h2 className="font-bold text-3xl pb-4">Add Position</h2>
      <div className="bg-white border p-6 border-gray-200 rounded">
        <form onSubmit={handleSubmit}>
          <div className="pb-4">
            <select onChange={({ target }) => setSelectedCategory(target.value)} className="form-select appearance-none input-focus block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
              <option>Open this select menu</option>
              {categories?.map((category, idx) => (
                <option value={category._id} key={idx}>{category.title}</option>
              ))}
            </select>
          </div>
          <div className="py-4">
            <input value={positionInfo.title}
              onChange={({ target }) => setPositionInfo({ ...positionInfo, title: target.value })}
              className="input-focus w-full text-gray-700 outline-none px-3 py-1.5 border border-gray-200 focus:border-gray-300 rounded" placeholder="Title"
              required
            />
            <input value={positionInfo.price}
              onChange={({ target }) => setPositionInfo({ ...positionInfo, price: target.value })}
              className="input-focus my-4 w-full text-gray-700 outline-none px-3 py-1.5 border border-gray-200 focus:border-gray-300 rounded" placeholder="Price Per Hour"
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

export default AddPosition