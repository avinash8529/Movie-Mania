import React, {useEffect, useState} from "react";
import axios from 'axios';
import Card from "./movie-page/cards";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";




const ReactRouter = () => {


  const [movieList, setMovieList] = useState([]);
  const getMovies = async () => {
    try {
      const { data} = await axios.get('http://localhost:3001/movies');
      console.log(data)
  
      setMovieList(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    getMovies()
  },[])


    const router = createBrowserRouter([
      
        {
    
            path: "/",
            element: <Card movieList={movieList}/>,
        },
       
      ]);
      

    return <RouterProvider router={router} />
}

export default ReactRouter;