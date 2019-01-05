import React from 'react';
import propTypes from 'prop-types';

const Counter = ({ value, onIncrementAsync, onIncrementIfOdd, onIncrement, onDecrement }) => (
  <div>
    <button onClick={onIncrementAsync}>Increment after 1 seconds</button><br/>
    <button onClick={onIncrementIfOdd}>Increment if odd</button><br/>    
    <button onClick={onIncrement}>Increment</button><br/>
    <button onClick={onDecrement}>Decrement</button>
    <hr/>
    <div>
      Clicked: {value} times
    </div>
  </div>
);

Counter.propTypes = {
  value: propTypes.number.isRequired,
  onIncrementAsync: propTypes.func.isRequired,
  onIncrement: propTypes.func.isRequired,
  onDecrement: propTypes.func.isRequired, 
}

export default Counter;