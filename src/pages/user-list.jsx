import { useLoaderData } from 'react-router-dom';

export function UserList() {
  const items = useLoaderData();
  
  return (
    <ul className='user-list'>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}
