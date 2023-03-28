import arrowOutlined from "../img/ant-design_swap-left-outlined.svg";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { signup, signin } from "../services/AuthService";
import { useNavigation } from "react-router-dom";

type FormData = {
  email: string;
  password: string;
};

const AuthForm = ({ isLogin }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async ({ email, password }: any) =>
    alert(JSON.stringify({ email, password }));

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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-y-10 pt-10'
      >
        <div className='flex flex-col'>
          <label className='mx-16 py-1 font-poppins'>Email</label>
          <input
            {...register("email")}
            className='mx-16 p-2.5 h-10 w-3/4 bg-orange_input block rounded-md'
            type='text'
          />
        </div>
        <div className='flex flex-col'>
          <div className='flex'>
            <label className='mx-16 py-1 font-poppins'>Password</label>
            <NavLink to='/' className='opacity-50 font-poppins'>
              Forgot password ?
            </NavLink>
          </div>
          <input
            {...register("password")}
            className='mx-16 p-2.5 h-10 w-3/4 bg-orange_input block rounded-md'
            type='password'
          />
        </div>
        <div className='flex flex-col gap-y-10 grow items-center justify-center'>
          <button
            type='submit'
            value='submit'
            className='flex text-white justify-center bg-orange_form hover:bg-hover_orange_form rounded-3xl w-36 h-12 shadow-xl'
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
      </form>
    </div>
  );
};

export default AuthForm;
