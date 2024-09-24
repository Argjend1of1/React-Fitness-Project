import React from 'react'
import { useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
  // the reason these need to be here is because the changes made to them will be affected in the entire website, regardless how many times it needs to be passed down, on components.
  const [bodyPart, setBodyPart] = useState('popular');
  const [exercises, setExercises] = useState([]);
  console.log(exercises);

  return (
    <Box>
      <HeroBanner />
      <SearchExercises 
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises 
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
      />
    </Box>
  )
}

export default Home