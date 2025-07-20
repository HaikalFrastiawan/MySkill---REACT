import { useState } from 'react'
import './App.css'
import Football from './component/Football'
import Goal from './component/Goal'
import Garage from './component/Garage'
import Welcome from './component/welcome'
import Title from './component/Title'
import MyComponent from './component/MyComponent'
import Garage2 from './component/ListStyleing'
import HeaderStyle from './component/inlineStyle'




function App() {

  const cars = ['ford',' mecleren','lamborgini']


  return (
    <>
    <Welcome /> 
    <hr />
    <Title />
    <hr />
    <MyComponent />
    <hr />
  
    
    <Football />
    <Goal isGoal ={false}/>
    <Garage cars={cars} />

    <hr />
    <Garage2 />

    <hr />
    <HeaderStyle />


    </>
  )
}

export default App
