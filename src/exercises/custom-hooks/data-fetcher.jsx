import { useEffect, useReducer } from 'react';
import './data-fetcher.css';

const URL_KEYS = {
  posts: 'POSTS',
  comments: 'COMMENTS',
  users: 'USERS',
};

const URLS = {
  [URL_KEYS.posts]: 'https://jsonplaceholder.typicode.com/posts',
  [URL_KEYS.comments]: 'https://jsonplaceholder.typicode.com/comments',
  [URL_KEYS.users]: 'https://jsonplaceholder.typicode.com/users',
};

export function DataFetcher() {
  const {
    state: { isLoading, error, data },
    dispatch,
  } = useDataFetcher(URLS);

  const handleDataTypeInput = (value) => {
    dispatch({ type: Actions.onSetDataType, payload: value });
  };

  {
    /* return (
    <div className='data-fetcher'>
      <DataTypePicker onChangeHandler={handleDataTypeInput} />
      <div className='data-fetcher__result'>
        {isLoading && <Loading />}
        {result}
      </div>
    </div>
  );*/
  }

  return (
    <div className='data-fetcher'>
      <DataTypePicker onChangeHandler={handleDataTypeInput} />
      <div className='data-fetcher__result'>
        {isLoading && <Loading />}
        {error && <Error message={error} />}
        {!!data.length && <Items items={data} />}
      </div>
    </div>
  );
}

function Loading() {
  return <div>Loading ...</div>;
}

function Error({ message }) {
  return <p>{message}</p>;
}

function Items({ items }) {
  return (
    <ul>
      {items.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>;
      })}
    </ul>
  );
}

function DataTypePicker({ onChangeHandler }) {
  return (
    <>
      <RadioInput
        title='Posts'
        id='type-1'
        value={URL_KEYS.posts}
        onChangeHandler={onChangeHandler}
      />
      <RadioInput
        title='Comments'
        id='type-2'
        value={URL_KEYS.comments}
        onChangeHandler={onChangeHandler}
      />
      <RadioInput
        title='Users'
        id='type-3'
        value={URL_KEYS.users}
        onChangeHandler={onChangeHandler}
      />
    </>
  );
}

function RadioInput(props) {
  const { title, id, value, onChangeHandler } = props;

  return (
    <div className='data-fetcher__input-container'>
      <label className='data-fetcher__label' htmlFor={id}>
        {title}
      </label>
      <input
        onChange={(evt) => onChangeHandler(evt.target.value)}
        type='radio'
        id={id}
        name='data-type'
        value={value}
      />
    </div>
  );
}

const Actions = {
  onStart: 'ON_START',
  onSuccess: 'ON_SUCCESS',
  onError: 'ON_ERROR',
  onSetDataType: 'ON_SET_DATA_TYPE',
};

const reducer = (state, { type, payload }) => {
  if (type === Actions.onSetDataType) return { ...state, dataType: payload };
  if (type === Actions.onStart)
    return { ...state, data: [], isLoading: true, error: '' };
  if (type === Actions.onSuccess)
    return { ...state, data: payload, isLoading: false, error: '' };
  if (type === Actions.onError)
    return { ...state, isLoading: false, error: payload };
  return state;
};

const useDataFetcher = (URLS) => {
  const [state, dispatch] = useReducer(reducer, {
    dataType: '',
    data: [],
    isLoading: false,
    error: '',
  });

  useEffect(() => {
    const controller = new AbortController();

    if (!state.dataType) return;

    dispatch({ type: Actions.onStart });

    fetch(`${URLS[state.dataType]}?_start=0&_limit=3`, {
      signal: controller.signal,
    })
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error();
      })
      .then((data) => dispatch({ type: Actions.onSuccess, payload: data }))
      .catch((err) => {
        if (err.name !== 'AbortError')
          dispatch({
            type: Actions.onError,
            payload: err.message === undefined ? err.message : 'fetch error',
          });
      });

    return () => controller.abort();
  }, [state.dataType, URLS]);

  return {
    state,
    dispatch,
  };
};

// https://dev.to/lakshmananarumugam/enum-in-javascript-4980
