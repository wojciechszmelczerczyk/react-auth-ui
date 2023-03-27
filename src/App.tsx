import { Navigate, useRoutes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

function App() {
  let element = useRoutes([
    { path: "/", element: <Navigate to='/signin' /> },
    { path: "/signin", element: <LoginPage /> },
  ]);

  return element;
}

export default App;
