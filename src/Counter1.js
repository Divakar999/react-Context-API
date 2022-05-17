import React, { useContext } from 'react';
import { Context } from './Context';
import Counter2 from './Counter2';

function Counter1() {
  const getValuesFromProvider = useContext(Context);
  return (
    <>
      <h3> Counter 1 Component </h3>
      Value : {getValuesFromProvider.initialValue} <br /> <br />
      <button onClick={getValuesFromProvider.handleIncrementFromProvider}>
        Increment
      </button>
      &nbsp; &nbsp;
      <button onClick={getValuesFromProvider.handleDecrementFromProvider}>
        Decrement
      </button>
      &nbsp; &nbsp;
      <button onClick={getValuesFromProvider.handleResetFromProvider}>
        Reset
      </button>
      &nbsp; &nbsp;
      <Counter2 />
    </>
  );
}

export default Counter1;
