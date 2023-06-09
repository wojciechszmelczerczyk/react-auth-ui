import { Navigate, useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import finances from "../img/Finances (1).svg";

const HomePage = () => {
  const { user } = useParams();
  const jwt = localStorage.getItem("jwt");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("email");
    navigate("/signin");
  };

  return (
    <>
      {jwt ? (
        <div className='flex flex-col bg-pink h-screen w-screen items-center overflow-hidden '>
          <div className='flex flex-col items-center'>
            <p className='text-orange_form sm:h-32 pt-28 mobile:text-3xl sm:text-4xl font-poppins font-semibold'>
              Logo Here
            </p>
            <h1 className='font-poppins mobile:text-2xl md:text-5xl pt-24 font-semibold'>
              Hello{" "}
              <p className='font-poppins inline-block mobile:text-2xl md:text-5xl font-black'>
                {user}!
              </p>
            </h1>
            <button
              className='flex text-white justify-center bg-orange_form hover:bg-hover_orange_form rounded-3xl mobile:w-32 mobile:h-10 sm:w-36 sm:h-12 my-10'
              onClick={logout}
            >
              <p className='font-poppins font-semibold mx-3 self-center text-md'>
                SIGN OUT
              </p>
            </button>
          </div>
          <div className='flex'>
            <img alt='' src={finances} width={500} />
          </div>
        </div>
      ) : (
        <Navigate to='/signin' />
      )}
    </>
  );
};

export default HomePage;
