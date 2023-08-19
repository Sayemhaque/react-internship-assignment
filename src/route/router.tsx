import { createBrowserRouter, } from "react-router-dom";
import App from "../App"
import PrivateRoute from "../private/PrivateRoute";
import Dashboad from "../pages/Dashboad";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><Dashboad /></PrivateRoute>
  }
]);

export default router;