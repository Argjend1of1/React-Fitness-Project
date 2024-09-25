import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { Box} from '@mui/material';
import { options, fetchData, youtubeOptions } from '../utils/fetchData';

import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises'

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExerciseData = async () => {
      const exerciseDbURL = `https://exercisedb.p.rapidapi.com`;

      const youtubeSearchUrl = `https://youtube-search-and-download.p.rapidapi.com`

      const exerciseDetailData = await fetchData(
        `${exerciseDbURL}/exercises/exercise/${id}`, options
      )
      setExerciseDetail(exerciseDetailData);

      // We only want to fetch videos based on the name of the exercise, therefore we will use the search, to display those videos:
      const exerciseVideosData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions
      )
      setExerciseVideos(exerciseVideosData.contents);
    }

    fetchExerciseData();
  }, [id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos 
        exerciseVideos={exerciseVideos} 
        name={exerciseDetail.name} 
      />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail;