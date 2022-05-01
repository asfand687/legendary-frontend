import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="h-screen w-32 shadow-xl bg-white ">
      <div className="flex flex-col items-center mt-2 text-gray-800 text-center">
        <article className="border-b border-gray-200 w-full py-10"><Link to="/">Analytics</Link></article>
        <article className="border-b border-gray-200 w-full py-10">Events</article>
        <article className="border-b border-gray-200 w-full py-10"><Link to="/employees">Employees</Link></article>
        <article className="border-b border-gray-200 w-full py-10"><Link to="/companies">Companies</Link></article>
        <article className="border-b border-gray-200 w-full py-10">Invoices</article>
      </div>
    </div>
  )
}

export default Sidebar