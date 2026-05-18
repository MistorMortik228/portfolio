import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/style/style.scss'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import "./i18n.js"


ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <App />
</BrowserRouter>
)