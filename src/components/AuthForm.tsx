import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import arrowOutlined from "../img/ant-design_swap-left-outlined.svg";
import { NavLink } from "react-router-dom";
import { signup, signin } from "../services/AuthService";

const AuthForm = ({ accountExist }: any) => {
  const [emailError, setEmailError] = useState<any>();
  const [passwordError, setPasswordError] = useState<any>();
  const [email, setEmail] = useState<any>();
  const [password, setPassword] = useState<any>();

  const navigate = useNavigate();

  useEffect(() => {
    // if jwt and email both exists in local storage redirect to user homepage
    if (localStorage.getItem("jwt") && localStorage.getItem("email")) {
      const email = localStorage.getItem("email");
      navigate(`/homepage/${email}`);
    }
  });

  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // functionialty is dependent on flag
      const res = accountExist
        ? await signin(email, password)
        : await signup(email, password);

      // if user id exists, it mean user was signed up properly
      if (res.data._id) {
        // redirect to signin page
        navigate("/signin");

        // if jsonwebtoken is returned, set user as logged in and redirect to homepage
      } else if (res.data.jwt) {
        // add jwt to local storage
        localStorage.setItem("email", res.data.email);
        localStorage.setItem("jwt", res.data.jwt);

        // redirect to main page
        navigate(`/homepage/${res.data.email}`);
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
    <div className='flex flex-col absolute top-20 bg-white drop-shadow-xl rounded-3xl h-5/6 sm:w-2/3 md:w-3/4 lg:w-1/3 3xl:w-1/4 left-28'>
      <h1 className='logoHeader mx-16 py-16 drop-shadow-2xl text-orange_form h-32 text-3xl lg:text-4xl font-poppins font-semibold text-center lg:text-start'>
        Logo Here
      </h1>
      <div className='mx-16'>
        <h2 className='welcomeHeader font-poppins text-base	py-6 opacity-50 drop-shadow-sm tracking-wide'>
          Welcome back !!!
        </h2>
        <h1 className='font-poppins font-semibold text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl'>
          {accountExist ? "Sign in" : "Sign up"}
        </h1>
      </div>
      <div className='flex flex-col gap-y-6 pt-8'>
        <div className='flex flex-col'>
          <label className='mx-16 py-1 font-poppins text-lg 3xl:text-xl'>
            Email
          </label>
          <input
            className='mx-16 p-2.5 h-10 3xl:h-12 w-3/4 bg-orange_input block rounded-md'
            type='text'
            onInput={() => setEmailError("")}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className='pt-4'>
            {emailError ? (
              <div className='fixed mx-16 -mt-2 py-1 w-3/4 bg-orange_form rounded-md'>
                <p className='mx-2 text-white font-poppins'>{emailError}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='flex'>
            <label className='mx-16 py-1 w-1/2 font-poppins text-lg 3xl:text-xl'>
              Password
            </label>
            <NavLink
              to='/'
              className='opacity-50 font-poppins w-1/2 self-center text-base 3xl:text-lg'
            >
              Forgot Password ?
            </NavLink>
          </div>
          <input
            className='mx-16 p-2.5 h-10 3xl:h-12 w-3/4 bg-orange_input block rounded-md'
            type='password'
            onInput={() => setPasswordError("")}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className='pt-4'>
            {passwordError ? (
              <div className='fixed mx-16 -mt-2 py-1 w-3/4 bg-orange_form rounded-md'>
                <p className='mx-2 text-white font-poppins'>{passwordError}</p>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-y-10 grow items-center justify-center -mt-5'>
        <button
          type='submit'
          value='submit'
          className='flex text-white justify-center bg-orange_form hover:bg-hover_orange_form rounded-3xl w-36 h-12 3xl:w-44 3xl:h-14 shadow-xl'
          onClick={onSubmit}
        >
          <p className='buttonText font-poppins font-semibold mx-3 self-center text-md 3xl:text-lg'>
            {accountExist ? "SIGN IN" : "SIGN UP"}
          </p>
          <img
            alt=''
            src={arrowOutlined}
            className='buttonArrowIcon font-poppins font-semibold self-center'
          />
        </button>
        <span className='font-poppins'>
          {accountExist ? (
            <p className='inline-block opacity-25 tracking-wide	'>
              Don't have an account?
            </p>
          ) : (
            <p className='inline-block opacity-25 tracking-wide	'>
              Already have an account?
            </p>
          )}
          <NavLink
            to={accountExist ? "/signup" : "/signin"}
            className='mx-1 text-orange_form hover:text-hover_orange_form'
          >
            {accountExist ? "Sign up" : "Sign in"}
          </NavLink>
        </span>
      </div>
    </div>
  );
};

export default AuthForm;
