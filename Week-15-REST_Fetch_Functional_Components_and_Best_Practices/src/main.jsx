import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NavBar from './navbar.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <App />
  </React.StrictMode>,
)
