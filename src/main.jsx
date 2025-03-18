import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import WeatherDetails from './Component/WeatherDetails';
import Error from './Component/Error';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([{
path:'/',
element: <App/>,
errorElement: <Error/>,
},
{
  path:'/WeatherDetails',
  element:<WeatherDetails/>,
}

]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    

  </StrictMode>,
)
