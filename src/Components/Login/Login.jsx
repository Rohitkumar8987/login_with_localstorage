import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate();
    const [login, setLogin] = useState('')

    const handleChange = (e) => {
        const {name, value} = e.target;
        // setSingUp({...signup, [name]: value})
        setLogin(prev => ({...prev, [name]: value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if(localStorage.getItem('signup')) {
            const localData = JSON.parse(localStorage.getItem('signup'));
            // console.log(JSON.parse(localData))
            // console.log(localData)
            if(login?.email === localData?.email && login?.password === localData?.password) {
                navigate('/dashboard')
            } else {
                alert('Please Check Email And Password')
            }
        }
    }
    console.log(login)
  return (
    <>
        <form onSubmit={(e) => handleSubmit(e)}>
        <input type="email" placeholder='Email' name='email' onChange={(e) => handleChange(e)}/>
        <input type="password" placeholder='Password' name='password' onChange={(e) => handleChange(e)}/>
        <button type='submit'>Login</button>
    </form>
    </>
  )
}
