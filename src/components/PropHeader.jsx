import React from 'react';

const PropHeader = ({ onIncrement, onDecrement }) => (
  <>
    <h1>Props Header</h1>
    <button onClick={onDecrement}>-</button>
    <button onClick={onIncrement}>+</button>
  </>
);

export default PropHeader;
