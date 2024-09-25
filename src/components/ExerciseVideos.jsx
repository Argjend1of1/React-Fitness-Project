import React from 'react'
import { Box, Stack, Typography } from '@mui/material';

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if(!exerciseVideos.length) return 'Loading...';

  return (
    <Box sx={{marginTop:{lg: '200px', xs: '20px'}}} p='20px'>
      <Typography variant='h3' mb= '33px' >
        Watch
        <span style={{textTransform: 'capitalize', color: '#ff2625'}}
        > {name}</span> exercise videos
      </Typography>
      <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center'
        sx={{flexDirection: {lg: 'row'}, gap: {lg: '110px', xs: '0px'}}}
      >
        {/* We only want the first 3 videos to be displayed */}
        {exerciseVideos.slice(0, 3).map((item, index) => (
          <a 
            href={
              `https://www.youtube.com/watch?v=${item.video.videoId}`
            } 
            key={index} 
            className='exercise-video'
            target='_blank'
            rel='noreferrer'
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant='h5' color='#000' fontWeight='bold'>
                {item.video.title}
              </Typography>
              <Typography fontSize='1rem' color='#000'>
                Channel: {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos