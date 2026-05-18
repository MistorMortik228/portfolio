import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects'
import Home from './pages/Home'
import { useEffect, useState } from 'react'


export default function App() {

  const [theme, setTheme] = useState('light')

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'

    setTheme(newTheme)

    document.body.classList.toggle('dark', newTheme === 'dark')

    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'

    setTheme(savedTheme)

    document.body.classList.toggle('dark', savedTheme === 'dark')
  }, [])


  return (
    <>
<Navbar 
changeTheme={changeTheme}
theme={theme}
/>

      
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/about' Component={About} />
        <Route path='/projects' Component={Projects} />
      </Routes>







    </>
  )
}
