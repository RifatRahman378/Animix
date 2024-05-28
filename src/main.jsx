
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root.jsx';
// import SearchApi from './Api/SearchApi.jsx';
import { MantineProvider } from '@mantine/core';
import Search from './Components/Search/Search.jsx';
import AnimeInfo from './Components/AnimeInfo/AnimeInfo.jsx';
// import Search from './Components/Search/Search.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element: <MantineProvider><App></App></MantineProvider> ,
      },
      {
        path:'/search',
        element:<Search></Search>
      },
      {
        path:'/anime/:title',
        element: <AnimeInfo></AnimeInfo>,
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  
     <RouterProvider router={router} />
  
)
