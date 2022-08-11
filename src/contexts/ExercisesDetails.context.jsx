import { createContext, useState } from 'react';


export const ExercisesDetailsContext = createContext({
  exerciseDetail: {},
  setExerciseDetail: () => { },
  exerciseVideos: [],
  setExerciseVideos: () => { },
  targetMuscleExercises: [],
  setTargetMuscleExercises: () => { },
  equipmentExercises: [],
  setEquipmentExercises: () => { },
});

export const ExercisesDetailsProvider = ({ children }) => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);

  const value = { exerciseDetail, setExerciseDetail, exerciseVideos, setExerciseVideos, targetMuscleExercises, setTargetMuscleExercises, equipmentExercises, setEquipmentExercises };

  return <ExercisesDetailsContext.Provider value={value}>{children}</ExercisesDetailsContext.Provider>
}