import React from 'react'
import { useEffect, useState } from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { options, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch]  = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  // this is used to fetch the cards where we scroll horizontally, follow through:
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options
      )

      setBodyParts(['popular', ...bodyPartsData]);
    }

    fetchExercisesData();
  }, [])

  const handleSearch = async () => {
    if(search) {
      const exercisesData = await fetchData(
        `https://exercisedb.p.rapidapi.com/exercises`, options
      );

      const searchedExercises = exercisesData.filter(
        (exercise) => 
        exercise.name.toLowerCase().includes(search) 
        || exercise.target.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.bodyPart.toLowerCase().includes(search)
      )
      setSearch('');
      setExercises(searchedExercises);
    }
  }

  return (
    <Stack
      alignItems='center' mt='37px' justifyContent='center' p='20px'
    >
      <Typography fontWeight={700} sx={{fontSize: {lg: '44px', xs: '30px', mb: '15px', textAlign: 'center'}}}>
        Awesome Exercises You <br/> Should Know
      </Typography>
      <Box position='relative' mb='72px'>
        <TextField
          sx={{
            input: {
              fontWeight: '700', border: 'none', borderRadius: '4px'
            },
            width: { lg: '1170px', xs: '350px'},
            backgroundColor: 'white',
            borderRadius: '10px 0 0 10px'
          }}
          height='76px'
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder= 'Search Exercises'
          type='text'
        >
        </TextField>
        <Button 
          className='search-btn'
          sx={{
            bgcolor: '#FF2625',
            color: 'white',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: {lg: '20px', xs: '14px'},
            height: '56px',
            borderRadius: '0 10px 10px 0'
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position: 'relative', width: '100%', p:'20px'}}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>

    </Stack>
  )
}

export default SearchExercises