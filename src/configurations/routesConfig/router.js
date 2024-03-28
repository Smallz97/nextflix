import { createBrowserRouter } from "react-router-dom";
import SignUp from "../../pages/auth/SignUp";
import HomePage from "../../pages/app/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: SignUp,
    // ErrorBoundary: ErrorBoundary,
    // children: childrenroutes,
  },
  {
    path: "home",
    Component: HomePage,
    // ErrorBoundary: ErrorBoundary,
    // children: childrenroutes,
  },
]);

export default router;
