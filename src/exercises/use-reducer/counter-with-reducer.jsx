import { useReducer } from 'react';
import './counter-with-reducer.css';

const Actions = {
  inc: 'INC',
  dec: 'DEC',
  reset: 'RESET',
  plusFive: 'PLUS_FIVE',
};

const reducer = (state, action) => {
  if (action.type === Actions.inc) return state + 1;
  if (action.type === Actions.dec) return state - 1;
  if (action.type === Actions.reset) return 0;
  if (action.type === Actions.plusFive) return state + action.payload;
  return state;
};

export function CounterWithReducer(props) {
  const { initialState } = props;

  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className='counter-with-reducer'>
      <button
        type='button'
        onClick={() => dispatch({ type: Actions.dec, payload: null })}
      >
        ➖
      </button>
      {count}
      <button
        type='button'
        onClick={() => dispatch({ type: Actions.inc, payload: null })}
      >
        ➕
      </button>
      <button
        type='button'
        onClick={() => dispatch({ type: Actions.reset, payload: null })}
        disabled={count === 0}
      >
        Reset
      </button>
      <button
        type='button'
        onClick={() => dispatch({ type: Actions.plusFive, payload: 5 })}
      >
        +5
      </button>
    </div>
  );
}
