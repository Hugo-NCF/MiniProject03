import { useState } from 'react'
import CalorieItem from './Components/CalorieItem';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <h1>Calorie Tracker</h1>
      
      <CalorieItem name={"Pizza"} />
      <CalorieItem name={"Burger"} />
      <CalorieItem name={"Fries"} />
      </div>
      
    </>
  )
}

export default App
