import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Box, Stack, Typography } from '@mui/material';
import { options, fetchData } from '../utils/fetchData';

import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbURL = `https://exercisedb.p.rapidapi.com`;

      // will use on the 2nd part, where we  display the similar videos
      const youtubeSearchUrl = `https://youtube-search-and-download.p.rapidapi.com`

      const exerciseDetailData = await fetchData(
        `${exerciseDbURL}/exercises/exercise/${id}`, options
      )

      setExerciseDetail(exerciseDetailData);
    }

    fetchExerciseData();
  }, [id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail;