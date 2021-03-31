import React from 'react';
import { useSelector } from 'react-redux';
import { getTodosCountSelector } from '../reducer/todos/selectors';

const TodoCount = React.memo(() => {
  const count = useSelector(getTodosCountSelector);

  console.log('render count:', count);

  return <h4>count: {count}</h4>;
});

export default TodoCount;
