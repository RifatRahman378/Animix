
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
import SearchApi from './Api/SearchApi.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<App></App>,
      },
      {
        path:'/search',
        element:<SearchApi></SearchApi>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  
     <RouterProvider router={router} />
  
)
