import { useEffect } from 'react'
import './App.css';
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom"
import Dashboard from './pages/Dashboard'
import Login from './pages/Login';


function App() {
  const navigate = useNavigate()
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) navigate('/login');
  }, [])
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Dashboard />} />
    </Routes>
  )
}

export default App;
