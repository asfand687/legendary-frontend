import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Table from '../components/CompanyTable'
import Modal from '../components/CompanyModal'


const Companies = () => {
  const [companies, setCompanies] = useState([])


  const getCompanies = async () => {
    try {
      const { data } = await axios.get("https://back.blackpenguin.site/api/company", {
        headers: {
          "Content-Type": "application/json"
        }
      })
      setCompanies(data)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    getCompanies()
  }, [])

  return (
    <div className="p-6 w-full max-w-7xl mx-auto">
      <h2 className="text-gray-700 text-3xl">Companies</h2>
      <div className="flex flex-row-reverse">
        <Modal getCompanies={getCompanies} />
      </div>
      <div className="max-h-[500px] overflow-y-scroll">
        <Table companies={companies} />
      </div>
    </div>
  )
}

export default Companies