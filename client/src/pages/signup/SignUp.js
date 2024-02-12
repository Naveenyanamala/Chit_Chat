import { Link } from "react-router-dom"
import GenderCheckBox from "./GenderCheckBox"
import { useState } from "react"
import useSignup from "../../hooks/useSignup"


const SignUp = () => {

  const [inputs,setInputs] =useState({
    fullName:'',
    username:'',
    password:'',
    confirmPassword:'',
    gender:''
  })
 

  const {loading,signup} = useSignup();

  const handleCheckBox= (gender) => {
    setInputs({...inputs,gender})
  }

  const handlesubmit =  async (e) => {
    e.preventDefault();
    await signup(inputs);
  }


  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className ='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter
      backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>SignUp
        <span className='text-gray-950'> Chit_Chat</span>
        </h1>
        <form  onSubmit={handlesubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input type='text' placeholder='Enter Name'className = 'w-full input input-bordered h-10'
            value={inputs.fullname}
            onChange={(e) => setInputs({...inputs,fullName:e.target.value})}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>USername</span>
            </label>
            <input type='text' placeholder='Enter Username'className = 'w-full input input-bordered h-10'
             value={inputs.username}
             onChange={(e) => setInputs({...inputs,username:e.target.value})}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type='password' placeholder='Password Name'className = 'w-full input input-bordered h-10'
             value={inputs.password}
             onChange={(e) => setInputs({...inputs,password:e.target.value})}
             />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input type='password' placeholder='Confirm password'className = 'w-full input input-bordered h-10'
             value={inputs.confirmPassword}
             onChange={(e) => setInputs({...inputs,confirmPassword:e.target.value})}
            />
          </div>

          {/* {Gener checkbox} */}
          <GenderCheckBox  onCheckboxChange ={handleCheckBox} selectedGender={inputs.gender} />

          <Link
          to={"/login"}
          className ='text-sm text-gray-400 hover:underline hover:text-blue-300 mt-2 inline-block'
          >Already have an account</Link>

          <div>
            <button className='btn btn-sm btn-block mt-2 border border-slate-700'>SignUp</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default SignUp