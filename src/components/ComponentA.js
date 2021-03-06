import React, { useContext } from 'react';

import { CountContext } from '../App';

export default function ComponentA() {
  const countContext = useContext(CountContext);
  const { countState, countDispatch } = countContext;
  return (
    <div>
      ComponentA - <h1>{countState}</h1>
      <button onClick={() => countDispatch('increment')}>
        Increment
      </button>
      <button onClick={() => countDispatch('decrement')}>
        Decrement
      </button>
      <button onClick={() => countDispatch('reset')}>Reset</button>
      <button onClick={() => countDispatch('random')}>
        Random
      </button>
    </div>
  );
}
