import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form className='flex flex-col items-center justify-center'>
                <input className="text-white outline-none  border-2 border-emrald-600 rounded-full text-white-xl py-3 px-5 bg-transparent placeholder:text-white" type="email" placeholder='Enter your email' />
                
                <input className="mt-4 text-whtie outline-none border-2 border-emrald-600 rounded-full text-white-xl py-3 px-5 bg-transparent placeholder:text-white"  type="password" placeholder='Enter your password' />
                <button className="mt-5 text-white outline-none  border-2  bg-emerald-600 border-emrald-600 rounded-full text-white-xl py-3 px-5 placeholder:text-white" >Login</button>

                
            </form>
        </div>
    </div>
  )
}

export default Login