import React from 'react'
import { Box, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = 
  ({ targetMuscleExercises, equipmentExercises }) => {
  return (
    <Box sx={{mt: {lg: '100px', xs: '0px'}}}>
      <Typography variant='h3' mb='40px' mt="100px">
        Exercises that target the same muscle group
      </Typography>
      <Stack direction='row' sx={{padding: '2', position: 'relative'}}>
        {targetMuscleExercises.length ? 
          <HorizontalScrollbar 
            data={targetMuscleExercises} isBodyPart={false}
          /> : <Loader />
        }
      </Stack>
      <Typography variant='h3' mb='40px' mt='100px'>
        Exercises that target the same equipment
      </Typography>
      <Stack direction='row' sx={{padding: '2', position: 'relative'}}>
        {equipmentExercises.length ? 
          <HorizontalScrollbar 
            data={targetMuscleExercises} isBodyPart={false}
          /> : <Loader />
        }
      </Stack>
    </Box>
  )
}

export default SimilarExercises