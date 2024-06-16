import { useLoaderData } from 'react-router-dom';

export function PostList() {
  const data = useLoaderData();
  
  return <div>post list length: {data.length}</div>;
}
