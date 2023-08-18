import { createBrowserRouter, } from "react-router-dom";
import App from "../App"
import SecondPage from "../pages/SecondPage";
import PrivateRoute from "../private/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/2ndpage",
    element: <PrivateRoute><SecondPage /></PrivateRoute>
  }
]);

export default router;