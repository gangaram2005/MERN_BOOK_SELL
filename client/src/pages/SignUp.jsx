import React, { useState } from 'react'
import { Button} from "flowbite-react";
import { FaEye,FaEyeSlash } from "react-icons/fa";
import { Link,useNavigate } from 'react-router-dom'


export default function SignUp() {
  // password show or hide garaune
  const [password,setPassword]=useState(true)

  const handleClick =()=>{
    setPassword(!password)
  }
  const navigate =useNavigate()
  const [formData,setFormData] = useState({})
  const [errorMessage,setErrorMessage]=useState(null)
  const [loading,setLoading]=useState(false)
  const handleChange =(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value.trim()})
  };
  
  //console.log(formData) //-- hane ko data console ma dekhinxa

  const handleSubmit =async(e)=>{
    e.preventDefault(); // submit garda page refresh nahos bhanera
    if (!formData.username || !formData.email || !formData.password) {
      return setErrorMessage("Please fill out all field")
    }
    try {
      setLoading(true)
      setErrorMessage(null)
      const res= await fetch ('http://localhost:4000/api/auth/signup',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(formData),
      })
      const data=await res.json();
      //console.log(data)
      if(data.success ===false){
        return setErrorMessage(data.message)
      }
      setLoading(false)
      if (res.ok) {
        navigate('/sign-in')
        
      }
    } catch (error) {
      setErrorMessage(error.message)
      setLoading(false)
      
    }
  }
  return (
    <div className='bg-[#070d1b;]'>
      <div className="login-page customradious md:mx-[35%] md:w-2/3 md:items-center mb-36">
        <div className="setcolor bg-[#070d1b;] pt-10 mb-20 pb-20">
          <div className="main-one md:w-[40%] sm:w-full sm:pr-10">
            <div className="heading">
              <h3 className="text-center">Sign Up</h3>
            </div>
            <div className="form-part">
              <form action="#" method="post" className="form-part-11">
                <div className="alag-part">
                  <input type="text" name="Name" id="Name" placeholder="Your Name" />
                </div>
                <div className="alag-part">
                  <input type="email" name="email" id="Email" placeholder="Your Email" />
                </div>

                <div className="alag-part flex items-center justify-center ">           
                  <input type={password ? 'password':'text'} name="name" id="Name" placeholder="Your Password" /> 
                  {password ? <FaEyeSlash className='text-3xl bg-[#070d1b;] text-white cursor-pointer -ml-20 mt-2' onClick={handleClick}/>:<FaEye className='text-3xl bg-[#070d1b;] text-white cursor-pointer -ml-20 mt-2' onClick={handleClick}/>}
                </div>

                <div className="alag-part w-full ml-1 mr-5">
                  <Button gradientDuoTone="purpleToPink" className='rounded-lg w-full h-2'>Submit</Button>
                </div>
              </form>
              <div className="another flex justify-between items-center">
                <h1 className='text-white text-1xl ml-5'>Have Account ?</h1>
                <Link to='/sign-in'><Button gradientDuoTone="purpleToPink" className='rounded-lg w-full h-2 button'>Login</Button></Link>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
