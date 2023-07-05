import { Box } from '@mui/material'
import {  HeroBanner , SearchExercises, Exercises } from '../components'
import { useState } from 'react';
import React from 'react';


const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  console.log(bodyPart)
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setBodyPart={setBodyPart} 
        setExercises={setExercises}
        bodyPart={bodyPart}

      />
      <Exercises 
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
      
    </Box>
  )
}

export default Home