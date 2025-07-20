import { useState } from 'react'
import './App.css'
import Football from './component/Football'
import Goal from './component/Goal'
import Garage from './component/Garage'


function App() {

  const cars = ['ford',' mecleren','lamborgini']

  return (
    <>
    

    <Football />
    <Goal isGoal ={false}/>
    <Garage cars={cars} />


    </>
  )
}

export default App
