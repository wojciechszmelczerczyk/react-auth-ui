import { Navigate, useParams } from "react-router";

const HomePage = () => {
  const { user } = useParams();
  const jwt = localStorage.getItem("jwt");

  return <>{jwt ? <h1>Hello {user}</h1> : <Navigate to='/signin' />}</>;
};

export default HomePage;
