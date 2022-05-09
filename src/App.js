import { useEffect, useState, useContext } from 'react'
import './App.css';
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom"
import Dashboard from './pages/Dashboard'
import Login from './pages/Login';
import jwt from 'jwt-decode'
import axios from 'axios';
import { UserContext } from './context/userState';


function App() {
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserContext)
  const [userInfo, setUserInfo] = useState({
    username: "", email: ""
  })
  useEffect(() => {
    const getUser = async () => {
      const userId = jwt(localStorage.getItem("token")).id
      const { data } = await axios.get(`https://back.blackpenguin.site/api/users/${userId}`)
      setUser({ username: data.username, email: data.email })
      setUserInfo({ username: data.username, email: data.email })
    }

    const token = localStorage.getItem('token')
    if (!token) navigate('/login')
    getUser()
  }, [])
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Dashboard />} />
    </Routes>
  )
}

export default App;
