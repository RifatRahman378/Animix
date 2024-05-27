import { useEffect, useState } from 'react'
import { ANIME } from '@consumet/extensions';
import Navbar from './Components/Header/Navbar';
import { Outlet } from 'react-router-dom';
const Root = () => {
    const [data, setData] = useState({})

  const gogoanime = new ANIME.Gogoanime();
  useEffect(()=>{
    gogoanime.search("One Piece").then(data => {
      // console.log(data);
      setData(data.results)
    })
  },[])
  // console.log(data);
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;