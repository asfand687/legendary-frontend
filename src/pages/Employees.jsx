import React, { useState } from 'react'
import Modal from '../components/Modal'
import Table from '../components/Table'

const Employees = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      email: "john@gmail.com",
      phone: "090078601",
      address: "15495 Tamiami Trail N",
      ssn: "609-47-0558",
    },
    {
      id: 2,
      firstName: "Steve",
      lastName: "Smith",
      email: "steve@gmail.com",
      phone: "090056601",
      address: "15495 Nexus Trail N",
      ssn: "619-47-3558",
    }
  ])
  return (
    <div className="p-6 w-full max-w-7xl mx-auto">
      <h2 className="text-gray-700 text-3xl">Employees</h2>
      <div className="flex flex-row-reverse">
        <Modal addEmployee={setEmployees} />
      </div>
      <Table employees={employees} />
    </div>
  )
}

export default Employees