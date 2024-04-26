import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import Header from './components/header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <h1>Demo</h1>
    <p>In this demo we try out different ways of styling components in React. Each page uses a different method. </p>
    <hr style={{color: "black"}}/>
  <Outlet/>
    </>
  )
}

export default App
