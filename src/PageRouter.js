import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  },
]);

function PageRouter() {
  return (
    <RouterProvider router={router} />
  );
}

export default PageRouter;
