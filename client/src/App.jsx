import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import ResetPassword from "./pages/ResetPassword"
import ForgotPassword from "./pages/ForgotPassword"
import UserDashBoard from "./pages/UserDashBoard"
import AccountCreated from "./pages/accountCreated"
import VerifyEmail from "./pages/verifyEmail"


const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-up/verify-email" element={<VerifyEmail />} />
        <Route path="/signup-successful" element={<AccountCreated />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/user-profile" element={<UserDashBoard />} />

      </Route>
    )
  )
   return (
    <RouterProvider router={router}/>
   )
}

export default App