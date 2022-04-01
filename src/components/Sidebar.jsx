import React from 'react'

const Sidebar = () => {
  return (
    <div className="h-[calc(100vh-60px)] w-32 shadow-xl fixed top-[60px] left-0 bg-white ">
      <div className="flex flex-col items-center mt-2 text-gray-800 text-center">
        <article className="border-b border-gray-200 w-full py-10">Analytics</article>
        <article className="border-b border-gray-200 w-full py-10">Events</article>
        <article className="border-b border-gray-200 w-full py-10">Employees</article>
        <article className="border-b border-gray-200 w-full py-10">Companies</article>
        <article className="border-b border-gray-200 w-full py-10">Invoices</article>
      </div>
    </div>
  )
}

export default Sidebar