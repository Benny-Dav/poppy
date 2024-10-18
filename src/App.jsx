
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import DashboardLayout from './layouts/DashboardLayout';
import Overview from './pages/Dashboard/Overview';
import Settings from './pages/Dashboard/Settings';
import GithubLayout from './layouts/GithubLayout';
import Repositories from './pages/Dashboard/Repositories';
import Products from './pages/products';
import Counter from './pages/Counter';
import Counter2 from './pages/Counter2';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />
    },
    {
      path: "/products",
      element: <Products />
    },
    {
      path: "/counter",
      element: <Counter />
    },

    {
      path: "/counter2",
      element: <Counter2 />
    },
    {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,//makes overview the default page showing when '/dashboard' is opened
        element: <Overview />
      },
      {
        path: "settings",
        element: <Settings />
      },
      {
        path: "github",
        element: <GithubLayout />,
        children: [
          {
            index: true,
            element: <Repositories />
          }
        ]
      }

    ]
    },
  ])

return <RouterProvider router={router} />
}

export default App;
