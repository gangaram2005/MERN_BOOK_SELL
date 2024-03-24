import React, { useState } from 'react'
import { Alert, Button,Label,Spinner,TextInput } from 'flowbite-react'
import { Link,useNavigate } from 'react-router-dom'


export default function SignUp() {
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
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className="leftside flex-1">
        <Link to='/' className='font-bold dark:text-white text-4xl'>
            <Button gradientDuoTone="purpleToPink" className='rounded-lg'>Gagan blog</Button>
        </Link>
        <p className='text-sm mt-5'>
          This is a demo projects. You can signup with your email and password 
          or Google
        </p>
        </div>
        <div className="rightside flex-1">
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <Label value='your user name'></Label>
              <TextInput type='text' placeholder='Username' id='username' onChange={handleChange}/>
            </div>
            <div>
              <Label value='your Email'></Label>
              <TextInput type='email' placeholder='Email' id='email' onChange={handleChange}/>
            </div>
            <div>
              <Label value='your Password'></Label>
              <TextInput type='password' placeholder='example@gmail.com' id='password' onChange={handleChange}/>
            </div>
            <Button gradientDuoTone="purpleToPink" type='submit' disabled={loading}>
              {loading ? (
                <>
                  <Spinner size='sm'/>
                  <span className='pl-3'>Loading..</span>
                </>
              ):(
                "SignUp"
              )}
            </Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have a Account ?</span>
            <Link to='/sign-up' className='text-blue-500'>Sign In</Link>
          </div>
          {
            errorMessage &&(
              <Alert className='mt-5' color='failure'>{errorMessage}</Alert>
            )
          }
        </div>
      </div>
    </div>
  )
}
