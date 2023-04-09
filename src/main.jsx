import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './Components/Error/Error';
import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import Blog from './Components/Blog/Blog';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';


const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    errorElement: <Error></Error>,
    children: [

      {path: '/', element: <Home></Home>},
      { path: '/applied-jobs', element: <AppliedJobs></AppliedJobs>},
      {path: '/statistics', element: <Statistics></Statistics>},
      {path: '/blog', element: <Blog></Blog>}



    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
