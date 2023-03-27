import { FC } from "react";
import AuthForm from "../components/AuthForm";

import finances from "../img/Finances.svg";

const LoginPage: FC = () => {
  return (
    <div className='flex w-screen h-screen overflow-hidden'>
      <div className='flex w-1/2'>
        <div className='w-6/12 '></div>
        <div className='w-6/12 bg-pink'></div>
        <AuthForm />
      </div>
      <div className='flex w-1/2 bg-pink items-center justify-items-center'>
        <img src={finances} className='z-10' width={1000} />
      </div>
    </div>
  );
};

export default LoginPage;
