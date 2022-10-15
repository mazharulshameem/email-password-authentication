
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Main from './components/Main';
import RegisterReactBootstrap from './components/RegisterReactBootstrap';

function App() {
const router = createBrowserRouter([
 {
   path:'/',
   element:<Main></Main>,
   children: [
   { path:'/',
    element:<RegisterReactBootstrap></RegisterReactBootstrap>
  },
   { path:'/register',
    element:<RegisterReactBootstrap></RegisterReactBootstrap>
  },
   { path:'/login',
    element:<Login></Login>
  }

   ]

 }

])
  return (
    <div className="">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
