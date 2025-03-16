import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AboutMe from './components/AboutMe.jsx'
import Home from './components/Home.jsx'
import MyProjects from './components/MyProjects.jsx'

const router = createBrowserRouter([
  {
    path:"", // it will contain object
    element:< App />,
      children:[{
      path:"",
      element:<Home/>,     
       
      },
      {
        path:"", // it will contain object
        element:< AboutMe />
      },
      {
        path:"project", // it will contain object
        element:< MyProjects />
      },
      
    ]
  },
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
