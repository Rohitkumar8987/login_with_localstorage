import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Signup() {
    const navigate = useNavigate();
    const [signup, setSingUp] = useState('')
    useEffect(() => {
        if(localStorage.getItem('signup')) {
            navigate('/login');
        } else {
            navigate('/');
        }
    },[])
    const handleChange = (e) => {
        const {name, value} = e.target;
        // setSingUp({...signup, [name]: value})
        setSingUp(prev => ({...prev, [name]: value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(signup.name?.length > 0 && signup.email?.length > 0 && signup?.password?.length > 0) {
            // console.log(signup)
            localStorage.setItem('signup', JSON.stringify(signup));
            navigate('/login')
        } else {
            alert('fill all fileds')
        }
    }



  return (
    <>
    <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder='Name' name='name' onChange={(e) => handleChange(e)}/>
        <input type="email" placeholder='Email' name='email' onChange={(e) => handleChange(e)}/>
        <input type="password" placeholder='Password' name='password' onChange={(e) => handleChange(e)}/>
        <button type='submit'>Signup</button>
    </form>
    </>
  )
}
