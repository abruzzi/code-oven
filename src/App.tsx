import React from 'react';
import './App.css';

import pizzas from './pizzas.json';

function App() {
  return (
    <div className="app">
      <h1>The Code Oven</h1>
      <div role="list">
        {pizzas.map(({id, name, price}) => <div key={id} role="listitem">
          <h3>{name}</h3>
          <p>{price}</p>
        </div>)}
      </div>
    </div>
  );
}

export default App;
