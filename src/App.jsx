import { useState } from 'react'

import './App.css'
import AddCategory from './components/AddCategory'
import DisplayGif from './components/DisplayGif'

function App() {
  const [category, setCategory] = useState('')

  return (
    <>
      <div className='App'>
       <h2>Gifs For All</h2>
       <AddCategory setCategory={setCategory} />
       <DisplayGif category={category} />
      </div>
    </>
  )
}

export default App
