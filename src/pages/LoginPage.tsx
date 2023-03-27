import AuthForm from "../components/AuthForm";

import finances from "../img/Finances.svg";

const LoginPage = () => {
  return (
    <div className='flex w-screen h-screen '>
      <div className='flex w-1/2'>
        <div className='w-6/12 '></div>
        <div className='w-6/12 bg-pink'></div>
        <AuthForm />
      </div>
      <div className='flex w-1/2 bg-pink items-center justify-items-center'>
        <div className=''>
          <img src={finances} className='z-10' />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
