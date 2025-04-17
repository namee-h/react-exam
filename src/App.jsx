
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import MainPage from './pages/MainPage'
import LoginPage from './pages/LoginPage'
import MyBookPage from './pages/MyBookPage'

function App() {


  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/my-books' element={<MyBookPage/>}/>
    </Routes>
   
    </>
  )
}

export default App
