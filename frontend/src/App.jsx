  import React, { useEffect } from 'react'
  import "./App.css"
  import Navbar from "./components/Navbar"
  import {Routes,Route, Navigate} from "react-router-dom"
import Home from './pages/Home'
import Signup from './pages/Signup'
import Setting from "./pages/Setting.jsx"
import Profile from "./pages/Profile.jsx"
import Login from './pages/Login'
import { useAuthStore } from './store/useAuthStore.js'
import { Toaster } from 'react-hot-toast';
import { useThemeStore } from './store/useThemeStore.js'

  const App = () => {
    const {checkAuth,authUser,isCheckingAuth} = useAuthStore()
    const {theme} = useThemeStore()

    useEffect(()=>{
      checkAuth()
    },[checkAuth])

    useEffect(()=>{
      document.documentElement.setAttribute("data-theme", theme);
    },[theme])
    return (
      <div >
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={authUser?<Home/>:<Navigate to={'/login'}/>}></Route>
          <Route path='/signup' element={!authUser? <Signup/>: <Navigate to="/"/>}></Route>
          <Route path='/login' element={ !authUser?<Login/> : <Navigate to="/"/>}></Route>
          <Route path='/settings' element={<Setting/>}></Route>
          <Route path='/profile' element={authUser? <Profile/> : <Navigate to={"/login"}/>}></Route>
        </Routes>
<Toaster />
      </div>
    )
  }

  export default App
