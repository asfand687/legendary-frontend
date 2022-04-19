import React from 'react'

const Table = ({ employees }) => {

  return (

    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-2xl">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="p-4">
            <div className="flex items-center">
              <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="checkbox-all-search" className="sr-only">checkbox</label>
            </div>
          </th>
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
            <tr key={employee.id}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                  <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                </div>
              </td>
              <td>
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