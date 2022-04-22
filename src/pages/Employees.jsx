import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from '../components/Modal'
import Table from '../components/Table'

const Employees = () => {
  const [employees, setEmployees] = useState([])

  const getEmployees = async () => {
    try {
      const { data } = await axios.get("http://54.183.246.192:9000/api/employee")
      setEmployees(data)
    } catch (error) {
      console.log(error.message)
    }
  }
  useEffect(() => {
    getEmployees()
  }, [])
  return (
    <div className="p-6 w-full max-w-7xl mx-auto">
      <h2 className="text-gray-700 text-3xl">Employees</h2>
      <div className="flex flex-row-reverse">
        <Modal getEmployees={getEmployees} />
      </div>
      <Table employees={employees} />
    </div>
  )
}

export default Employees