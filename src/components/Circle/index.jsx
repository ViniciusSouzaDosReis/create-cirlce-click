import React from 'react';
import './index.css'

function Circle({posX, posY}) {
  return (
    <div className='circle' style={{top: `${posY}px`, left: `${posX}px`}}></div>
  );
}

export default Circle;