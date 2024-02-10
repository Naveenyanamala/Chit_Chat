import GenderCheckBox from "./GenderCheckBox"


const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className ='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter
      backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>SignUp
        <span className='text-gray-950'> Chit_Chat</span>
        </h1>
        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Full Name</span>
            </label>
            <input type='text' placeholder='Enter Name'className = 'w-full input input-bordered h-10'/>
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>USername</span>
            </label>
            <input type='text' placeholder='Enter Username'className = 'w-full input input-bordered h-10'/>
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type='password' placeholder='Password Name'className = 'w-full input input-bordered h-10'/>
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input type='password' placeholder='Confirm password'className = 'w-full input input-bordered h-10'/>
          </div>

          {/* {Gener checkbox} */}
          <GenderCheckBox/>

          <a 
          href='#'
          className ='text-sm text-gray-400 hover:underline hover:text-blue-300 mt-2 inline-block'
          >Already have an account</a>

          <div>
            <button className='btn btn-sm btn-block mt-2 border border-slate-700'>SignUp</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default SignUp