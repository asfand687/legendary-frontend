import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import {
  Routes,
  Route,
} from "react-router-dom"
import Analytics from './Analytics'
import Employees from './Employees'
import Companies from './Companies'
import Events from './Events'
import AddEvent from './AddEvent'
import AddUser from './AddUser'
import AddCategory from './AddCategory'
import AddPosition from './AddPosition'
import Settings from './Settings'

const Dashboard = () => {
  return (
    <section className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <Routes>
          <Route path="/" element={<Analytics />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/add" element={<AddEvent />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/addcategory" element={<AddCategory />} />
          <Route path="/addposition" element={<AddPosition />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </section>
  )
}

export default Dashboard