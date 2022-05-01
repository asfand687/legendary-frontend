import React from 'react'

const Table = ({ employees }) => {

  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-2xl">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            First Name
          </th>
          <th scope="col" className="px-6 py-3">
            Last Name
          </th>
          <th scope="col" className="px-6 py-3">
            Email
          </th>
          <th scope="col" className="px-6 py-3">
            Phone
          </th>
          <th scope="col" className="px-6 py-3">
            Address
          </th>
          <th scope="col" className="px-6 py-3">
            SSN
          </th>
          <th scope="col" className="px-6 py-3">
            <span className="sr-only">Edit</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {
          employees.map(employee => (
            <tr key={employee._id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="px-6">
                {employee.firstName}
              </td>
              <td className="px-6 py-4">
                {employee.lastName}
              </td>
              <td className="px-6 py-4">
                {employee.email}
              </td>
              <td className="px-6 py-4">
                {employee.phone}
              </td>
              <td className="px-6 py-4">
                {employee.address}
              </td>
              <td className="px-6 py-4">
                {employee.ssn}
              </td>
              <td className="px-6 py-4 text-right">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
          ))
        }

      </tbody>
    </table>

  )
}

export default Table