import arrowOutlined from "../img/ant-design_swap-left-outlined.svg";
import { NavLink } from "react-router-dom";

const AuthForm = () => {
  return (
    <div className='flex flex-col absolute lg:top-10 2xl:top-20 bg-white drop-shadow-2xl rounded-3xl h-4/5 lg:h-5/6 sm:w-2/3 lg:w-1/3 left-28'>
      <h1 className='mx-16 py-16 text-orange_form h-32 lg:text-3xl text-4xl drop-shadow-sm font-poppins font-semibold'>
        Logo Here
      </h1>
      <div className='mx-16'>
        <h2 className='font-poppins py-6 opacity-50 drop-shadow-sm'>
          Welcome back !!!
        </h2>
        <h1 className='font-poppins font-semibold md:text-3xl lg:text-4xl 2xl:text-6xl'>
          Sign in
        </h1>
      </div>
      <div className='flex flex-col gap-y-10 py-16'>
        <div>
          <label className='mx-16 font-poppins'>Email</label>
          <input
            className='mx-16 p-2.5 h-10 w-3/4 bg-orange_input block rounded-md'
            type='text'
          />
        </div>
        <div className=''>
          <div className='flex'>
            <label className='mx-16 font-poppins'>Password</label>
            <NavLink
              to='/'
              className='opacity-50 font-poppins justify-self-center'
            >
              Forgot password ?
            </NavLink>
          </div>
          <input
            className='mx-16 p-2.5 h-10 w-3/4 bg-orange_input block rounded-md'
            type='password'
          />
        </div>
      </div>
      <div className='flex flex-col gap-y-10 grow items-center justify-center'>
        <button className='flex text-white justify-center bg-orange_form hover:bg-hover_orange_form rounded-3xl w-36 h-12 shadow-xl'>
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
          <NavLink
            to='/'
            className='mx-1 text-orange_form hover:text-hover_orange_form opacity-100'
          >
            Sign up
          </NavLink>
        </span>
      </div>
    </div>
  );
};

export default AuthForm;
