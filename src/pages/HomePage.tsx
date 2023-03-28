import { useParams } from "react-router";

const HomePage = () => {
  const { user } = useParams();
  return <h1>Hello {user}</h1>;
};

export default HomePage;
