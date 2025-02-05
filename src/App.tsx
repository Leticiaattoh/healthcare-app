

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import FindADoctor from './components/FindADoctor';
import Apps from './components/Apps';
import Testimonials from './components/Testimonials';
import AboutUs from './components/AboutUs';
import LandingPage from './Pages/LandingPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />

    },
    {
      path: '/find',
      element: <FindADoctor />

    },
    {
      path: '/apps',
      element: <Apps/>

    },
    {
      path: '/testimonials',
      element: <Testimonials/>

    },
    {
      path: '/about',
      element: <AboutUs/>

    },
  ]);
  return <RouterProvider router={router}/>


  


}

export default App;
