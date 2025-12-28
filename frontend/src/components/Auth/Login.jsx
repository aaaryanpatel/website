import React, { useState } from 'react'

const Login = () => {


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // when user clicks the submit button browser creates e event object and passes to function
  const submitHandler = (e) => {
      /* e.preventDefault
        By default, HTML forms do this when submitted:
          send the form data
          refresh / reload the page
      **/
      e.preventDefault()
      console.log("email is ", email);
      console.log("password is ", password);

      setEmail('')
      setPassword('')
  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form 
              onSubmit={(e) => {
                submitHandler(e);
              }}
              className='flex flex-col items-center justify-center'>
                <input 
                  value={email}
                  onChange={(e)=>{
                     setEmail(e.target.value)
                  }}
                
                className="text-white outline-none  border-2 border-emerald-600 rounded-full text-white-xl py-3 px-5 bg-transparent placeholder:text-white" type="email" placeholder='Enter your email' />
                
                <input 
                 value={password}
                 onChange={(e) => {
                  setPassword(e.target.value)
                 }}
                  className="mt-4 text-white outline-none border-2 border-emerald-600 rounded-full text-white-xl py-3 px-5 bg-transparent placeholder:text-white"  type="password" placeholder='Enter your password' />
                <button className="mt-5 text-white outline-none  border-2 border-emerald-600  bg-emerald-600 border-emrald-600 rounded-full text-white-xl py-3 px-5 placeholder:text-white" >Login</button>

                
            </form>
        </div>
    </div>
  )
}

export default Login