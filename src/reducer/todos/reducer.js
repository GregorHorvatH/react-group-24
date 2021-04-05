import types from './types';

const initialState = {
  showModal: false,
  selectedTodo: undefined,
  items: [
    {
      id: 2,
      value: 'buy something',
      date: 1614624203912,
      isDone: true,
      urgency: 'low',
    },
    {
      date: 1615402045698,
      isDone: true,
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
      return state.items.find(({ value }) => value === action.payload.value)
        ? state
        : {
            ...state,
            items: [...state.items, action.payload],
          };

    case types.TODO_DELETE:
      return {
        ...state,
        items: state.items.filter((todo) => todo.id !== action.payload),
      };

    case types.TODO_TOGGLE:
      return {
        ...state,
        items: state.items.map((todo) =>
          todo.id === action.payload
            ? {
                ...todo,
                isDone: !todo.isDone,
              }
            : todo,
        ),
      };

    case types.TODO_SELECT:
      return {
        ...state,
        selectedTodo: state.items.find((todo) => todo.id === action.payload),
      };

    case types.TODO_EDIT:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? {
                ...item,
                ...action.payload,
              }
            : item,
        ),
      };

    case types.MODAL_TOGGLE:
      return {
        ...state,
        showModal: !state.showModal,
      };

    default:
      return state;
  }
};

export default reducer;
