import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(15)

  const addValue = () =>{
    setCount(count +1)
  }

  const removeValue = () => {
    setCount(count - 1)
  }
  return (
    <>
     <h1>React course with hitesh {count}</h1>
     <h2>Counter value: {count}</h2>
     <button
     onClick={addValue}>Add value</button> {" "}
     <button onClick={removeValue}>remove value</button>
     <p>footer: {count}</p>
    </>
  )
}

export default App
