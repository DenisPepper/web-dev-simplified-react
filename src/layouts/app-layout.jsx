import {
  Link,
  Outlet,
  ScrollRestoration,
  useNavigation,
} from 'react-router-dom';

export function AppLayout() {
  const { state } = useNavigation();

  return (
    <>
      <nav className='app-nav'>
        <ul>
          <li>
            <Link to='/posts'>Posts</Link>
          </li>
          <li>
            <Link to='/users'>Users</Link>
          </li>
          <li>
            <Link to='/todos'>Todos</Link>
          </li>
        </ul>
      </nav>
      <ScrollRestoration />
      <div className='app-container'>
        {state === 'loading' ? <div>Loading...</div> : <Outlet />}
      </div>
    </>
  );
}
