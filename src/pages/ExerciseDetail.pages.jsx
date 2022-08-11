import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, exercisesYoutubeVideosOptions, fetchData } from "../utils/fetchData.utils";

import Detail from "../components/Detail.component";
import ExerciseVideos from "../components/ExerciseVideos.component";
import SimilarExercises from "../components/SimilarExercises.component";
import { ExercisesDetailsContext } from '../contexts/ExercisesDetails.context';

const ExerciseDetail = () => {

  const { exerciseDetail, setExerciseDetail, setExerciseVideos, setTargetMuscleExercises, setEquipmentExercises } = useContext(ExercisesDetailsContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, exercisesYoutubeVideosOptions);
      setExerciseVideos(exerciseVideosData.contents);

      const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
      setTargetMuscleExercises(targetMuscleExercisesData);
      const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exerciseOptions);
      setEquipmentExercises(equipmentExercisesData);
    };
    fetchExercisesData();
  }, [id])

  return (
    <Box>
      <Detail />
      <ExerciseVideos name={exerciseDetail.name} />
      <SimilarExercises />
    </Box>
  )
}

export default ExerciseDetail