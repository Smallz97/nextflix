import { createBrowserRouter } from "react-router-dom";
import loginRoute from "./loginRoute";
import signUpRoute from "./signUpRoute";
import appRoutes from "./appRoutes";

const router = createBrowserRouter([loginRoute, signUpRoute, appRoutes]);

export default router;
