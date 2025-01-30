import { createBrowserRouter, RouterProvider } from 'react-router';
import './App.css'
import Details from './Components/details/Details';
import Layout from './Components/layout/Layout';
import Test from './Components/Test/Test';

let R=createBrowserRouter([
  {path:'' , element:<Layout/>, children:[
    {path:'', element:<Test/>},
    {path:'details/:id', element:<Details/>},
    // {path:'*', element:<Notgound/>}
  ]}
])

function App() {
  return (
    <>
    <RouterProvider router={R}></RouterProvider>
    </> 
  )
}

export default App
