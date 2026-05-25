import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import RootLayout from "./Layout/RootLayout"
import Home from "./Pages/Home"
import Jobs, { jobLoader } from "./Pages/Jobs"
import Contact from "./Pages/Contact"
import NotFound from "./Pages/NotFound"
import AddJobs from "./Pages/AddJobs"
import Login from "./Pages/Login"
import LoginLayout from "./Layout/LoginLayout"
import Error from "./Pages/Error"
import RealLogin from "./Pages/RealLogin"
import JobLayout from "./Layout/JobLayout"
import JobDetails, { JobDetailsLoader } from "./components/JobDetails"

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<LoginLayout/>}>
          <Route index element={<Login/>}/>
          <Route path="Login" element={<RealLogin/>}/>
          <Route path="Error" element={<Error/>}/>
          <Route path="home" element={<RootLayout/>}>
            <Route path="home" element={<Home/>}/>
            <Route path="jobs" element={<JobLayout/>}>
              <Route index element={<Jobs/>} loader={jobLoader}/>
              <Route path=":id" element={<JobDetails/>} errorElement={<Error/>} loader={JobDetailsLoader}/>
            </Route>
            <Route path="/home/contact" element={<Contact/>}/>
            <Route path="*" element={<NotFound/>}/>
            <Route path="home/addJobs" element={<AddJobs/>}/>
          </Route>
        </Route>
    ))
  return <RouterProvider router={router}/>
}

export default App