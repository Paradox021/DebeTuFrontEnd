import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import AddUser from './pages/AddUser'
import LogIn from './pages/LogIn'
import Greetings from './pages/Greetings'
import Messages from './pages/Message.jsx'
import Navbar from './components/Navbar'
import Users from './pages/User'
import MyUser from './pages/MyUser'
import MyCreditors from './pages/MyCreditors'
import MyDebtors from './pages/MyDebtors'

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
        <Route path='/myUser' element={<MyUser/>}></Route>
        <Route path='/myDebtors' element={<MyDebtors/>}></Route>
        <Route path='/myCreditors' element={<MyCreditors/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
