import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route to="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    )
  )
   return (
    <RouterProvider router={router}/>
   )
}

export default App