import { useLoaderData } from 'react-router-dom';

export function PostList() {
  const items = useLoaderData();

  return (
    <ul className='post-list'>
      {items.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}
