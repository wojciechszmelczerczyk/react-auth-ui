import { Navigate, useRoutes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

export default function Router() {
  let element = useRoutes([
    { path: "/", element: <Navigate to='/signin' /> },
    { path: "/signin", element: <LoginPage /> },
    { path: "/signup", element: <LoginPage /> },
    { path: "/homepage/:user", element: <HomePage /> },
  ]);

  return element;
}
