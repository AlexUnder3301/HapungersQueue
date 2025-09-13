import { useState } from 'react'
import './App.css'

function App() {
  const [participants, setParticipants] = useState(['Эмерскибиби', 'Эмерскигиги', 'Эмерскидиди'])
  const [isRolled, setIsRolled] = useState(false)

  function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

  return (
    <div className='app'>
      <h2 className='heading'>Определение очереди хапульки</h2>
      <button onClick={() => {
        setParticipants(shuffleArray(participants))
        setIsRolled(true)
      }}>Roll</button>
      <ul>
        {isRolled && 
        participants.map((item, index) => {
          return <li>{`${index + 1}. ${item}`}</li>
        })
        }
      </ul>
    </div>
  )
}

export default App
