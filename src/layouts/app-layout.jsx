import { Link, Outlet } from 'react-router-dom';

export function AppLayout() {
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
      <div className='app-container'>
        <Outlet />
      </div>
    </>
  );
}
