import React from 'react'

const Analytics = () => {
  return (
    <div className="p-6">
      <article className="flex items-end space-x-2">
        <h2 className="text-4xl font-bold"> Default</h2>
        <p className="border-r pr-3 border-gray-200 font-light">new</p>
        <p className="border-r pr-3 border-gray-200 font-light">dashboards</p>
        <p className="font-light">default</p>
      </article>
      <hr className="my-4" />
      <div className="flex space-x-4">
        <article className="w-1/3 shadow-xl p-6 py-10 flex flex-col items-center">
          <h2 className="text-sm font-semibold text-gray-500">Total Events</h2>
          <h3 className="text-3xl text-purple-400 tracking-tight pt-3">14</h3>
        </article>
        <article className="w-1/3 shadow-xl p-6 py-10 flex flex-col items-center p-6">
          <h2 className="text-sm font-semibold text-gray-500">Active Events</h2>
          <h3 className="text-3xl text-purple-400 tracking-tight pt-3">72</h3>
        </article>
        <article className="w-1/3 shadow-xl p-6 py-10 flex flex-col items-center">
          <h2 className="text-sm font-semibold text-gray-500">Pending Events</h2>
          <h3 className="text-3xl text-purple-400 tracking-tight pt-3">44</h3>
        </article>
      </div>
    </div >
  )
}

export default Analytics