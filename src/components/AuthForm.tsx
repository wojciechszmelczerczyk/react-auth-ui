import { useState } from "react";
import { useNavigate } from "react-router-dom";
import arrowOutlined from "../img/ant-design_swap-left-outlined.svg";
import { NavLink } from "react-router-dom";
import { signup, signin } from "../services/AuthService";

const AuthForm = ({ isLogin }: any) => {
  const [emailError, setEmailError] = useState<any>();
  const [passwordError, setPasswordError] = useState<any>();

  const [email, setEmail] = useState<any>();
  const [password, setPassword] = useState<any>();

  const navigate = useNavigate();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const res = isLogin
        ? await signin(email, password)
        : await signup(email, password);

      // if email exists, mean user was signed up properly
      if (res.data.email) {
        // redirect to signin page
        navigate("/signin");
        // if jsonwebtoken is returned, set user as loggedin and redirect to homepage
      } else if (res.data.jwt) {
        // redirect to main page
      }
      // otherwise catch an error message and assign to error state
    } catch (err: any) {
      // if response is an array, iterate and check error message
      // if error message contains user and email info, set email error state
      // otherwise set password error state
      if (Array.isArray(err.response.data.message)) {
        err.response.data.message.forEach((err: any) => {
          if (err.includes("user") || err.includes("email")) {
            setEmailError(err);
          } else {
            setPasswordError(err);
          }
        });
        // if response is string value check if contains specific word and fill error state
      } else {
        if (
          err.response.data.message.includes("user") ||
          err.response.data.message.includes("email")
        ) {
          setEmailError(err.response.data.message);
        } else {
          setPasswordError(err.response.data.message);
        }
      }
    }
  };

  return (
    <div className='flex flex-col absolute lg:top-10 2xl:top-20 bg-white drop-shadow-2xl rounded-3xl h-4/5 lg:h-5/6 sm:w-2/3 md:w-3/4 lg:w-1/3 left-28'>
      <h1 className='mx-16 py-16 text-orange_form h-32 lg:text-3xl text-4xl drop-shadow-sm font-poppins font-semibold'>
        Logo Here
      </h1>
      <div className='mx-16'>
        <h2 className='font-poppins py-6 opacity-50 drop-shadow-sm'>
          Welcome back !!!
        </h2>
        <h1 className='font-poppins font-semibold md:text-3xl lg:text-4xl 2xl:text-6xl'>
          {isLogin ? "Sign in" : "Sign up"}
        </h1>
      </div>
      <div className='flex flex-col gap-y-10 pt-10'>
        <div className='flex flex-col'>
          <label className='mx-16 py-1 font-poppins'>Email</label>
          <input
            className='mx-16 p-2.5 h-10 w-3/4 bg-orange_input block rounded-md'
            type='text'
            onInput={() => setEmailError("")}
            onChange={(e) => setEmail(e.target.value)}
          />
          {emailError ? (
            <div className='mx-16 py-1 w-3/4 bg-orange_form rounded-md'>
              <p className='mx-2 text-white font-poppins'>{emailError}</p>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className='flex flex-col'>
          <div className='flex'>
            <label className='mx-16 py-1 font-poppins'>Password</label>
            <NavLink to='/' className='opacity-50 font-poppins'>
              Forgot password ?
            </NavLink>
          </div>
          <input
            className='mx-16 p-2.5 h-10 w-3/4 bg-orange_input block rounded-md'
            type='password'
            onInput={() => setPasswordError("")}
            onChange={(e) => setPassword(e.target.value)}
          />
          {passwordError ? (
            <div className='mx-16 py-1 w-3/4 bg-orange_form rounded-md'>
              <p className='mx-2 text-white font-poppins'>{passwordError}</p>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className='flex flex-col gap-y-10 grow items-center justify-center'>
        <button
          type='submit'
          value='submit'
          className='flex text-white justify-center bg-orange_form hover:bg-hover_orange_form rounded-3xl w-36 h-12 shadow-xl'
          onClick={onSubmit}
        >
          <p className='font-poppins font-semibold mx-3 self-center text-md'>
            {isLogin ? "SIGN IN" : "SIGN UP"}
          </p>
          <img
            alt=''
            src={arrowOutlined}
            className='font-poppins font-semibold self-center'
          />
        </button>
        <span className='font-poppins opacity-50'>
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <NavLink
            to={isLogin ? "/signup" : "/signin"}
            className='mx-1 text-orange_form hover:text-hover_orange_form opacity-100'
          >
            {isLogin ? "Sign up" : "Sign in"}
          </NavLink>
        </span>
      </div>
    </div>
  );
};

export default AuthForm;
