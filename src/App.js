import { useState } from 'react';
import './App.css';
import Circle from './components/Circle';

function App() {
  const [circles, setCircles] = useState([])

  const createCircle = (e) =>{
    setCircles([...circles, <Circle posY={e.clientY} posX={e.clientX} key={circles.length}/>])
  }

  return (
      <div className='container_click' onClick={(e) => createCircle(e)}>
        {circles}
      </div>
  );
}

export default App;
