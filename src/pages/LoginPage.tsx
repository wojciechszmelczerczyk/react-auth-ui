import { FC } from "react";
import { useLocation } from "react-router";
import AuthForm from "../components/AuthForm";

import finances from "../img/Finances.svg";

const LoginPage: FC = () => {
  // intercept url
  const { pathname } = useLocation();

  const login = pathname === "/signin" ? true : false;

  return (
    <div className='flex w-screen h-screen overflow-hidden'>
      <div className='flex w-1/2'>
        <div className='bg-pink lg:bg-white w-6/12 '></div>
        <div className='w-6/12 bg-pink'></div>
        <AuthForm isLogin={login} />
      </div>
      <div className='flex w-1/2 bg-pink items-center'>
        <img
          alt=''
          src={finances}
          className='invisible lg:visible'
          width={1000}
        />
      </div>
    </div>
  );
};

export default LoginPage;
