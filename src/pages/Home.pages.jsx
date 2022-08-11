import React from 'react';
import { Box } from '@mui/system';
import HeroBanner from "../components/HeroBanner.component";
import SearchExercises from "../components/SearchExercises.component";
import Exercises from "../components/Exercises.component";

const Home = () => {



  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  )
}

export default Home