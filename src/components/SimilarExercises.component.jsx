import React, { useContext } from 'react';
import { ExercisesDetailsContext } from '../contexts/ExercisesDetails.context';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar.component';
import Loader from './Loader.component';

const SimilarExercises = () => {

  const { targetMuscleExercises, equipmentExercises } = useContext(ExercisesDetailsContext);

  return (
    <Box
      sx={{
        mt: {
          lg: '100px',
          xs: '0'
        }
      }}
    >
      <Typography variant='h3' mb={5}>
        Exercises that target the same muscle group
      </Typography>
      <Stack
        direction='row'
        sx={{
          p: "2",
          position: "relative"
        }}
      >
        {
          targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises} /> : <Loader />
        }
      </Stack>
      <Typography variant='h3' mb={5}>
        Exercises that use the same equipment
      </Typography>
      <Stack
        direction='row'
        sx={{
          p: "2",
          position: "relative"
        }}
      >
        {
          equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises} /> : <Loader />
        }
      </Stack>
    </Box>
  )
}

export default SimilarExercises