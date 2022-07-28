import React from 'react'
import ReactDOM from 'react-dom/client'
import { EmployedApp } from './EmployedApp'

import { BrowserRouter } from "react-router-dom"

import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  
  <BrowserRouter>
   
    <EmployedApp/>
  </BrowserRouter>
 
)
