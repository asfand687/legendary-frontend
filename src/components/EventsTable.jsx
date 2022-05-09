import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'

const EventsTable = ({ events }) => {
  const [employeeList, setEmployeeList] = useState([])
  const selectRef = useRef(null)

  const getEmployees = async () => {
    try {
      const { data } = await axios.get("https://back.blackpenguin.site/api/api/employee")
      setEmployeeList(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleAddEmployee = async (employeeId, eventId) => {
    try {
      const { data } = await axios.post("https://back.blackpenguin.site/api/event/addUser", { employeeId, eventId })
      selectRef.current.value = "Set Employee"
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getEmployees()
  }, [])

  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-2xl">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Company Name
          </th>
          <th scope="col" className="px-6 py-3">
            Parking
          </th>
          <th scope="col" className="px-6 py-3">
            Event Name
          </th>
          <th scope="col" className="px-6 py-3">
            Professionals
          </th>
          <th scope="col" className="px-6 py-3">
            Start Time
          </th>
          <th scope="col" className="px-6 py-3">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {
          events.map(event => (
            <tr key={event._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6">
                {event.companyName}
              </td>
              <td className="px-6 py-4">
                {event.parking}
              </td>
              <td className="px-6 py-4">
                {event.eventName}
              </td>
              <td className="px-6 py-4">
                {event.professionals}
              </td>
              <td className="px-6 py-4">
                {event.startTime}
              </td>
              <td className="px-6 py-4 text-right">
                <select ref={selectRef} onChange={({ target }) => handleAddEmployee(target.value, event._id)} className="bg-white border border-gray-300 py-1 px-2 outline-0" aria-label="Default select example">
                  <option>Set Employee</option>
                  {employeeList.map((employee, idx) => (
                    <option value={employee._id} key={idx}>{employee.firstName}</option>
                  ))}
                </select>
              </td>
            </tr>
          ))
        }

      </tbody>
    </table>
  )
}

export default EventsTable