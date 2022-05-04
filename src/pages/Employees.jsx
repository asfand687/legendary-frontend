import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Modal from '../components/EmployeeModal'
import Table from '../components/EmployeeTable'

const Employees = () => {
  const [employees, setEmployees] = useState([])

  const getEmployees = async () => {
    try {
      const { data } = await axios.get("https://back.blackpenguin.site/api/employee")
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
      <div className="max-h-[500px] overflow-y-scroll">
        <Table employees={employees} />
      </div>
    </div>
  )
}

export default Employees