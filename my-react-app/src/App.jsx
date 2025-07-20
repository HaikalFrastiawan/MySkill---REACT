import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Welcome } from './component/welcome'
import Title from './component/Title'
import IniState from './component/ChangeProps'

import MyComponent from './component/MyComponent'

function App() {
  
  return (
    <>
     <Welcome name = 'Haikal' />
     <Title />
     <IniState />
    
     <MyComponent />
    </>
  )
}

export default App
