import { FC } from "react";
import { useLocation } from "react-router";
import AuthForm from "../components/AuthForm";

import finances from "../img/Finances.svg";

const LoginPage: FC = () => {
  // intercept url
  const { pathname } = useLocation();

  // two urls match same component, accountExist flag is used to
  // differentiate signin and signup forms
  const accountExist = pathname === "/signin" ? true : false;

  return (
    <div className='flex w-screen h-screen overflow-hidden'>
      <div className='flex w-1/3'>
        <div className='bg-pink lg:bg-white w-9/12 '></div>
        <div className='w-3/12 bg-pink'></div>
        <AuthForm accountExist={accountExist} />
      </div>
      <div className='flex w-2/3 grow bg-pink items-center justify-center'>
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
