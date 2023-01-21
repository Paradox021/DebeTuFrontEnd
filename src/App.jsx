import './App.css'
import Messages from './components/Messages'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Saludo from './components/Saludo'
import Navbar from './components/Navbar'
import Users from './components/User'
import AddUser from './components/AddUser'

function App() {

  return (
    <BrowserRouter>
        <Navbar/>
       <Routes>
        <Route path="/" element={<Saludo/>}></Route>
        <Route path="/chat" element={<Messages/>}></Route>
        <Route path="/user" element={<Users/>}></Route>
        <Route path="/addUser" element={<AddUser/>}></Route>
       </Routes>
    </BrowserRouter>
  )
}

export default App
