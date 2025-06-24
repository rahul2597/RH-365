import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Jobs from "./Pages/Jobs";
import Employer from "./Pages/Services";
import Insights from "./Pages/Insights";
import NotFound from "./Pages/NotFound";
import Layout from "./layout/Layout";
import JobDetails from "./Components/JobDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
        { 
            path: "/", 
            element: <Home /> 
        },
        { 
            path: "/about", 
            element: <About /> 
        },
        { 
            path: "/contact", 
            element: <Contact /> 
        },
        { 
            path: "/jobs", 
            element: <Jobs /> 
        },
        {
          path: "/apply-job/:id",
          element: <JobDetails />
        },
        { 
            path: "/services", 
            element: <Employer /> 
        },
        { 
            path: "/insights", 
            element: <Insights /> 
        },
    ],
  },
  {
    path: "*",
    element: <NotFound />
  }
]);


const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
