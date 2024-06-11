import { useState, useEffect } from 'react';
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
  const { data, isLoading, error, setData, setDataType } = useDataFetcher(URLS);

  const handleDataTypeInput = (value) => {
    setData([]);
    setDataType(value);
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

const useDataFetcher = (URLS) => {
  const [dataType, setDataType] = useState('');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    if (!dataType) return;

    setIsLoading(true);
    setError('');

    fetch(`${URLS[dataType]}?_start=0&_limit=3`, { signal: controller.signal })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => {
        if (err.name !== 'AbortError') setError(err.message);
      })
      .finally(() => {
        if (controller.signal.aborted) return;
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [dataType]);

  return {
    data,
    isLoading,
    error,
    setData,
    setDataType,
  };
};

// https://dev.to/lakshmananarumugam/enum-in-javascript-4980
