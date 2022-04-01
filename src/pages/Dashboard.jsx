import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import {
  Routes,
  Route,
} from "react-router-dom"
import Analytics from './Analytics'

const Dashboard = () => {
  return (
    <section>
      <Navbar />
      <Sidebar />
      <div className="ml-[6rem]">
        <Routes>
          <Route path="/" element={<Analytics />} />
        </Routes>
      </div>
    </section>
  )
}

export default Dashboard