import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import MovieItems from '../Movies/MovieItems'
import { Link } from 'react-router-dom'
import { getAllMovies } from '../../api-helper/api-helpers'
import ImageSlider from '../ImageSlider'

const Homepage = () => {
   const [movies, setmovies] = useState([]);
   useEffect(()=>{
      getAllMovies().then((data)=>setmovies(data.movies)).catch((err)=>console.log(err));
   },[])
   console.log(movies);

   const slides =[
      {url: 'https://pbs.twimg.com/media/FsHbePTWcAAR19k?format=jpg&name=4096x4096', title:'Interstellar'},
      {url: 'https://pbs.twimg.com/media/FsHnmQSXsAEiXZt?format=jpg&name=medium', title:'Hunger Games'},
      {url: 'https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/brahmastra-et00063710-1661162101.jpg', title:'Brahmastra'},
      {url: 'https://w0.peakpx.com/wallpaper/99/136/HD-wallpaper-movie-john-wick-chapter-3-parabellum-john-wick-keanu-reeves.jpg', title:'John Wick'},
      {url: 'https://w0.peakpx.com/wallpaper/114/670/HD-wallpaper-oblivion-movie-oblivion-movie.jpg', title:'Oblivion'}
   ]

  return (
 <Box width={"100%"} height={"100%"} margin={"auto"} marginTop={2}>

 <Box margin={"auto"} width="70%" height={"45vh"} padding={2}>
    <ImageSlider slides={slides}/>
 </Box>



{/* Typhography for the text */}

 <Box padding={5} margin="auto">
    <Typography variant='h4' textAlign={"center"}>  
    Latest Release
    </Typography>
 </Box>



 <Box display={"flex"} margin="auto" width="90%" justifyContent={"center"} flexWrap="wrap">
 {movies && movies.slice(0,4).map((item,index)=>
  <MovieItems id={item._id} title={item.title} posterUrl={item.posterUrl} releaseDate={item.releaseDate} key={index}/>
  )}

 </Box>
 <Box display="flex" padding={5} margin="auto">
 <Button LinkComponent={Link} to="/movies" variant='outlined' sx={{margin:"auto", color:"#2b2d42"}}> View All Movies </Button>

 </Box>
 </Box>
  )
}

export default Homepage
