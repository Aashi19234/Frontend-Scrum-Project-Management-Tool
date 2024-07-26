import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Register from './components/register/Register.jsx'
import Login from './components/login/Login.jsx'
import Projectsubmissionform from './components/projectsubmissionform/Projectsubmissionform.jsx'
import ProjectDashboard from './pages/ProjectDashboard.jsx'
import LandingPage from './pages/LandingPage.jsx'

import BacklogPage from './pages/BacklogPage.jsx'
import AllProjectDashboard from './pages/AllProjectDashboard.jsx'



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<LandingPage/>}/>
      <Route path ='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/createproject' element={<Projectsubmissionform/>}/>
     
     <Route path='/allproject' element={<AllProjectDashboard/>}/>
     <Route path='/projectbacklog' element={<BacklogPage/>}/>
     <Route path='project/:projectId' element={<ProjectDashboard/>}/>
      
     
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
