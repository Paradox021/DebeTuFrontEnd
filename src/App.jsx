import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import AddUser from './components/AddUser'
import LogIn from './components/LogIn'
import Greetings from './components/Greetings'
import Messages from './components/Message.jsx'
import Navbar from './components/Navbar'
import Users from './components/User'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Greetings/>}></Route>
        <Route path='/chat' element={<Messages/>}></Route>
        <Route path='/users' element={<Users/>}></Route>
        <Route path='/adduser' element={<AddUser/>}></Route>
        <Route path='/logIn' element={<LogIn/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
