import React from 'react'

const EventsTable = ({ events }) => {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-2xl">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Location
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
                {event.location}
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
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td>
            </tr>
          ))
        }

      </tbody>
    </table>
  )
}

export default EventsTable