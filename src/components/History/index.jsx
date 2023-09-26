import React, { useState } from 'react';
import './History.css'

function History({ transferToHistory }) {

  return (
    <div  className="history">
      <ul>
        <li dangerouslySetInnerHTML={{__html: document.cookie}}></li>
      </ul>
    </div>
  );
}

export default History;
