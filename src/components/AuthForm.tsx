import arrowOutlined from "../img/ant-design_swap-left-outlined.svg";

const AuthForm = () => {
  return (
    <div className='flex flex-col absolute h-4/5 w-4/12 top-20 left-28 z-10 opacity-85 bg-white drop-shadow-2xl rounded-3xl'>
      {/* <div className='line'> */}
      <h1 className='mx-16 py-16 text-orange_form h-32 text-4xl drop-shadow-sm font-poppins font-semibold'>
        Logo Here
      </h1>
      {/* </div> */}

      <div className='mx-16'>
        <h2 className='font-poppins py-6 opacity-50 drop-shadow-sm'>
          Welcome back !!!
        </h2>
        <h1 className='font-poppins font-semibold text-6xl'>Sign in</h1>
      </div>
      <div className='flex flex-col gap-y-10 py-6'>
        <div className=''>
          <label className='mx-16 font-poppins'>Email</label>
          <input
            className='mx-16 p-2.5 h-10 w-3/4 bg-orange_input block rounded-md'
            type='text'
          />
        </div>
        <div className=''>
          <div className='flex'>
            <label className='mx-16 font-poppins'>Password</label>
            <a href='' className='opacity-50 font-poppins'>
              Forgot Password ?
            </a>
          </div>
          <input
            className='mx-16 p-2.5 h-10 w-3/4 bg-orange_input block rounded-md'
            type='password'
          />
        </div>
      </div>
      <div className='flex flex-col gap-y-10 grow items-center justify-center'>
        <button className='flex text-white justify-center bg-orange_form rounded-3xl w-36 h-12 shadow-xl'>
          <p className='font-poppins font-semibold mx-3 self-center text-md'>
            SIGN IN
          </p>
          <img
            alt=''
            src={arrowOutlined}
            className='font-poppins font-semibold self-center'
          />
        </button>
        <span className='font-poppins opacity-50'>
          Don't have an account?
          <a href='' className='mx-1 text-orange_form opacity-100'>
            Sign up
          </a>
        </span>
      </div>
    </div>
  );
};

export default AuthForm;
