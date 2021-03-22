import types from './types';

const initialState = {
  x: 0,
  items: [
    {
      id: 2,
      value: 'buy something',
      date: 1614624203912,
      isDone: false,
      urgency: 'low',
    },
    {
      date: 1615402045698,
      isDone: false,
      value: 'sdfgsg',
      urgency: 'low',
      id: 3,
    },
    {
      date: 1615402049177,
      isDone: false,
      value: 'e56y45yu',
      urgency: 'low',
      id: 4,
    },
    {
      date: 1615402053585,
      isDone: false,
      value: 'tuyikj75',
      urgency: 'low',
      id: 5,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TODO_ADD:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case types.TODO_DELETE:
      return {
        ...state,
        items: state.items.filter((todo) => todo.id !== action.payload),
      };

    case 'counter/increment':
      return {
        ...state,
        x: state.x + 1,
      };

    default:
      return state;
  }
};

export default reducer;
