import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'


const UserDashboard = () => {

  
  return (
    <>
      <Header/>
       <div className='container d-flex justify-content-center align-items-center flex-column mt-5'>
      <h1 style={{fontSize:'40px'}} className='mt-5'>Welcome to the Quiz APP</h1>
      <Link to='/quiz' className='btn btn-primary fs-3 mt-5'>Start the Quiz</Link>
    </div>
    </>
 
  )
}

export default UserDashboard
