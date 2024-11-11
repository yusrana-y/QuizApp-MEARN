import React, { useEffect, useState } from 'react'
import { getQuestionAPI } from '../services/allAPI';
import Header from '../components/Header';

const Quiz = () => {
    const [allQuestions,setAllQuestions] = useState([])
    const [result,setResult] = useState(0)

    useEffect(()=>{
        getQuestion()
    },[])

    const getQuestion =async ()=>{
        console.log("submit button clicked");
        const token = sessionStorage.getItem("token")
        console.log(token);
        
        if(token)
        {
            const reqHeader = {
                "Authorization":`Bearer ${token}`
            }

            try
            {
                //api call
                const result = await getQuestionAPI(reqHeader)
                console.log(result);
                setAllQuestions(result.data)
                
            }
            catch(err)
            {
                console.log(err);
                
            }
        }
  
        
    }

    const handleSubmit = ()=>{
        console.log("handle submit clockked");
    }

    console.log(allQuestions);
    
  return (
   <>
   <Header/>
   <div className="container">
    <h1 className=' text-center'>Welcome to REACT QUIZ</h1>
   { allQuestions?.length>0 ?
    allQuestions?.map(item=>(
        <div className="div border p-3 mt-3">
        <h5>{item.question} </h5>
        <ol>
            <li>{item.op1}</li>
            <li>{item.op2}</li>
            <li>{item.op3}</li>
        </ol>
        </div>
    ))
    
    :
    <div>No Questions to display!</div>    

}
    
  

    <button type='button' className='btn btn-primary text-center mt-3 w-50' onClick={handleSubmit}>SUBMIT</button>
   </div>
   </>
  )
}

export default Quiz
