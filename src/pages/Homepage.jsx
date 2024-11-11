import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (

    <div className="container" style={{marginTop:'80px'}}>
        <div className="row d-flex justify-content-center align-items-center mt-5">
            <div className="col-lg-6">
                <img src="https://www.iitb-bandhu.org/Content/images/fun-quiz-pic.png" alt="Quiz Img" className='img-fluid mt-5' />
            </div>
            <div className="col-lg-6">
                <div className='d-flex justify-content-center align-items-center mt-5'>
                <Link to='/login' className='btn btn-primary fs-2'>Take the Quiz</Link>
                </div>
            </div>
        </div>
        <div>
            <h1 className='text-center mt-5 text-primary'>Take the quiz and test your React Knowledge</h1>
        </div>
    </div>
  )
}

export default Homepage
