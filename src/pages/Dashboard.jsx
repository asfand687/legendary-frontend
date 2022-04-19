import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import {
  Routes,
  Route,
} from "react-router-dom"
import Analytics from './Analytics'
import Employees from './Employees'

const Dashboard = () => {
  return (
    <section className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <Routes>
          <Route path="/" element={<Analytics />} />
          <Route path="/employees" element={<Employees />} />
        </Routes>
      </div>
    </section>
  )
}

export default Dashboard