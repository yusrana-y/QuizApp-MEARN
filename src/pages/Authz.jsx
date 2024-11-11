import React, { useContext, useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { loginAPI, registerAPI } from '../services/allAPI'

const Authz = ({ insideRegister }) => {

    const navigate = useNavigate()
    const [userDet,setUserDet] = useState({
        username:"",email:"",password:""
    })

    console.log(userDet);

  
    const handleRegister = async(e)=>{
        e.preventDefault()
        console.log("register button clicked")
        const {username,email,password} = userDet
        if(username&&email&&password)
        {
            const result = await registerAPI(userDet)
            console.log(result);
            
            if(result.status==200)
            {
                alert("registration succesfull")
                setUserDet({username:"",email:"",password:""})
                navigate('/login')
            }
            else
            {   if(result.status==406)
                alert(result.response.data);
            }
        }
        else
        {
            alert("please fill the form completely")
        }
        

        
    }



    const handleLogin = async(e)=>{
        e.preventDefault()
        console.log("login clicked");
       if(userDet.email && userDet.password)
       {
        try
        {
            const result = await loginAPI(userDet)
            if(result.status==200)
            {
                sessionStorage.setItem("user",JSON.stringify(result.data.user))
                sessionStorage.setItem("token",result.data.token)

                navigate('/dashboard')
                setUserDet({username:"",email:"",password:""})

            }
            else
            {
                alert(result.response.data)
                setUserDet({username:"",email:"",password:""})
            }
        }
        catch(err)
        {
            console.log(err);
            
        }
       }
       else
       {
        alert("pleqwse fill the fgorm")
       }
        
    }


    return (
        <>
            <div className="container w-100" style={{ minHeight: '100vh' }}>

                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <img src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-5425.jpg" alt="login image" width={'100%'} className='pt-5' />
                    </div>
                    <div className="col-lg-6">
                        <form action="" >

                            {insideRegister && <Form.Floating className="mb-3">
                                <Form.Control
                                    id="floatingInputCustom"
                                    type="text"
                                    placeholder="username"
                                    value={userDet.username}
                                    onChange={e=>setUserDet({...userDet,username:e.target.value})}
                                />
                                <label htmlFor="floatingInputCustom" >Username</label>
                            </Form.Floating>}

                            <Form.Floating className="mb-3">
                                <Form.Control
                                    id="floatingInputCustom"
                                    type="email"
                                    placeholder="name@example.com"
                                    value={userDet.email}
                                    onChange={e=>setUserDet({...userDet,email:e.target.value})}
                                />
                                <label htmlFor="floatingInputCustom">Email address</label>
                            </Form.Floating>

                            <Form.Floating>
                                <Form.Control
                                    id="floatingPasswordCustom"
                                    type="password"
                                    placeholder="Password"
                                    value={userDet.password}
                                    onChange={e=>setUserDet({...userDet,password:e.target.value})}
                                />
                                <label htmlFor="floatingPasswordCustom">Password</label>
                            </Form.Floating>

                            {insideRegister ?
                                <div> <button className='btn bg-primary text-center text-light w-50 fs-5 mt-3' onClick={handleRegister}>Register</button>
                                    <h5 className='pt-2'>Already registered? <Link to='/login'>Login</Link></h5></div>
                                :
                                <div> <button className='btn bg-primary text-center text-light w-50 fs-5 mt-3 ' onClick={handleLogin}>Login

                                </button>
                                    <h5 className='pt-2'>Not yet registered?<Link to='/register'>Register Now</Link></h5></div>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Authz
