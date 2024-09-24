import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Pagination from '@mui/material/Pagination';

import { options, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

// Used to display all the exercises:
const Exercises = ({exercises, setExercises, bodyPart}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 4;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise, indexOfLastExercise
  );
  const paginate = (e, value) => {
    setCurrentPage(value)
    window.scrollTo({top: 1800, behavior:'smooth'})
  } 

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exerciseData = [];

      if(bodyPart === 'popular') {
        exerciseData = await fetchData(
          'https://exercisedb.p.rapidapi.com/exercises', options
        )
      }else {
        exerciseData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, options
        )
      }
      setExercises(exerciseData);
    }

    fetchExercisesData();
  }, [bodyPart]);
  // See how u need the bodyPart here, if u put it only on the bodyPart components u wouldnt be able to use it here, therefore we add it at home where all the data gets displayed, so we can share it through components as needed.
  return (
    <Box id='exercises'
      sx={{mt: {lg: '110px' }}}
      mt= '50px'
      p="20px"
    >
      <Typography variant='h3' mb="46px">
        Showing Results
      </Typography>
      <Stack direction='row' sx={{gap: { lg: '110px', xs: '50px'}}}
        flexWrap='wrap' justifyContent='center'
      >
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise}/>
        ))}
      </Stack>
      <Stack mt='100px' alignItems='center'>
        {exercises.length > 4 && (
          <Pagination 
            color='standard'
            shape='rounded'
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            size='large'
            onChange={paginate}
            // behind the scenes: (e) => paginate(e, value), therefore we added the event and value at the function uptop
          />
        )}
      </Stack>

    </Box>
  )
}

export default Exercises