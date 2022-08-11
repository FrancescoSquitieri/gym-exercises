import React, { useContext } from 'react';
import { ExercisesDetailsContext } from '../contexts/ExercisesDetails.context';
import { Box, Stack, Typography } from '@mui/material';

const ExerciseVideos = ({ name }) => {

  const { exerciseVideos } = useContext(ExercisesDetailsContext);

  return (
    <Box
      sx={{
        marginTop: {
          lg: '200px',
          xs: '20px'
        }
      }}
      p='20px'
    >
      <Typography
        variant='h3'
        mb='33px'
      >
        Watch
        <Typography
          component='span'
          variant='h3'
          color='#ff2625'
          textTransform='capitalize'
          px={1}
        >
          {name}
        </Typography>
        exercise videos
      </Typography>
      <Stack
        justifyContent='flex-start'
        flexWrap='wrap'
        alignItems='center'
        sx={{
          flexDirection: {
            lg: "row"
          },
          gap: {
            lg: "110px",
            xs: "0"
          }
        }}
      >
        {
          exerciseVideos?.slice(0, 3).map((item, index) => (
            <a
              key={index}
              className='exercise-video'
              href={`https://youtube.com/watch?v=${item.video.videoId}`}
              rel="nopener noreferrer"
              target='_blank'
            >
              <img src={item.video.thumbnails[0].url} alt={item.video.title} />
              <Box>
                <Typography variant='h5' color='#000'>
                  {item.video.title}
                </Typography>
                <Typography variant='h6' color='#000'>
                  {item.video.channelName}
                </Typography>
              </Box>
            </a>
          ))
        }
      </Stack>
    </Box>
  )
}

export default ExerciseVideos