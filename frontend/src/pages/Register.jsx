import {useState} from 'react'
import { FaUser} from 'react-icons/fa'
import {toast} from 'react-toastify'
import {useSelector,useDispatch} from  'react-redux'
import { register } from '../features/auth/AuthSlice'

function Register() {
  const [formData,setFormData]=useState({
    name:null,
    email:'',
    password:'',
    password2: '',
  })

  const {name,email,password,password2}=formData

const dispatch=useDispatch()

const {user,isLoading,isSuccess,message} =
useSelector(
  (state)=> state.auth
  )
  const onChange=(e)=>{
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }

  const onSubmit=(e)=>{
    e.preventDefault()
    if(password !==password2)
   {
     toast.error('password do not match')
    }
  }
  return (
    <>
         <section className="heading">
          <h1>
            <FaUser/>Register {user}
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
