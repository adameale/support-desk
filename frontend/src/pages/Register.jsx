import {useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import { FaUser} from 'react-icons/fa'
import {toast} from 'react-toastify'
import { useDispatch, useSelector } from "react-redux";
import { register,reset } from '../features/auth/AuthSlice'
import Spinner from '../components/Spinner';
function Register() {
  const [formData,setFormData]=useState({
    name:'',
    email:'',
    password:'',
    password2: '',
  })

  const {name,email,password,password2}=formData

const dispatch=useDispatch()
const navigate=useNavigate()
 const {user,isLoading,isError,isSuccess,message} =useSelector((state)=> state.auth)
useEffect(()=>{
  if(isError){
    toast.error(message)
  }

  //redirect when logged in
  if(isSuccess || user){
navigate('/')
  }
  dispatch(reset())
},
[isError,isSuccess,user,message,navigate,dispatch])
  const onChange=(e)=>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value,
    }))
  }

  const onSubmit=(e)=>{
    e.preventDefault()

    if(password !==password2) {
     toast.error('password do not match')
    }
    else{
      const userData={
        name,
        email,
        password,
      }
      dispatch(register(userData))
    }
  }
  if(isLoading){
  return  <Spinner/>
  }
  return (
    <>
         <section className="heading">
          <h1>
            <FaUser/>Register  {name}
          </h1>
          <p> Please create an account</p>

         </section>

         <section className='form'>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <input type="text" className='form-control' 
              id='name' value={name}
              placeholder='Enter Your  Name'
               onChange={onChange} name="name" 
               required />
            </div>

            <div className="form-group">
              <input type="email" className='form-control'
               id='email' value={email}
               onChange={onChange} name="email" 
               placeholder='Enter Your  Email'
               required/>
            </div>

            <div className="form-group">
              <input type="password" className='form-control'
               id='password' value={password}
               onChange={onChange}
                name="password"
                required
                placeholder='Enter Your  password'/>
            </div>

            <div className="form-group">
              <input type="password"
               className='form-control'
               id='password2' 
               value={password2}
               onChange={onChange} 
               name="password2"
               required
               placeholder='confirm  password'/>
            </div>
            <div className="form-group">
              <button className="btn btn-block">Submit</button>
            </div>
          </form>
         </section>

 
    </>
  )
}

export default Register   
