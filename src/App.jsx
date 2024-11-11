import './App.css'
import { Route,Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import UserDashboard from './pages/UserDashboard'
import Authz from './pages/Authz'
import Quiz from './pages/Quiz'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/register' element={<Authz insideRegister={true}/>}></Route>
        <Route path='/login' element={<Authz/>}></Route>
        <Route path='/dashboard' element={<UserDashboard/>}></Route>
        <Route path='/quiz' element={<Quiz/>}></Route>
      </Routes>
    </>
  )
}

export default App
