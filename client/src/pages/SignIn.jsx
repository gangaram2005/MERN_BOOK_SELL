import React, { useState } from 'react'
import { Button} from "flowbite-react";
import { Link } from 'react-router-dom';
import { FaEye,FaEyeSlash } from "react-icons/fa";
export default function SignIn() {

  const [password,setPassword]=useState(true)

  const handleClick =()=>{
    setPassword(!password)
  }
  return (
    <div className='bg-[#070d1b;]'>
      <div className="login-page customradious md:mx-[35%] md:w-2/3 md:items-center mb-36">
        <div className="setcolor bg-[#070d1b;] pt-10 mb-20 pb-20">
          <div className="main-one md:w-[40%] sm:w-full sm:pr-10">
            <div className="heading">
              <h3 className="text-center">Login</h3>
            </div>
            <div className="form-part">
              <form action="#" method="post" className="form-part-11">
                <div className="alag-part">
                  <input type="email" name="name" id="Name" placeholder="Your Email" />
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
                <h1 className='text-white text-1xl ml-5'>Don't Have Account ?</h1>
                <Link to='/sign-up'><Button gradientDuoTone="purpleToPink" className='rounded-lg w-full h-2 button'>SignUP</Button></Link>
              </div>

              <div className="forget-password ml-2">
                <Link><Button gradientDuoTone="purpleToPink" className='rounded-lg w-full h-2 button'>Forget Password</Button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
