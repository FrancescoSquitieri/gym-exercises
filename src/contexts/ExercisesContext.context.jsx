import { createContext, useState, useEffect } from 'react';
import { exerciseOptions, fetchData } from '../utils/fetchData.utils';

export const ExercisesContext = createContext({
  bodyPart: 'all',
  setBodyPart: () => { },
  exercises: [],
  setExercises: () => { },
  bodyParts: [],
  setBodyParts: () => { }
});

export const ExercisesProvider = ({ children }) => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyPartsData])
    };
    fetchExercisesData();
  }, []);

  const value = {
    bodyPart,
    setBodyPart,
    exercises,
    setExercises,
    bodyParts,
    setBodyParts
  };

  return <ExercisesContext.Provider value={value}>{children}</ExercisesContext.Provider>
}