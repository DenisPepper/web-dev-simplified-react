import { useLoaderData } from 'react-router-dom';

export function PostItem() {
  const item = useLoaderData();

  return <div>{item.title ?? 'post not found'}</div>;
}
