import { Navigate, createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './layouts/app-layout';
import { PostList } from './pages/post-list';
import { UserList } from './pages/user-list';
import { TodoList } from './pages/todo-list';

const routerConfig = {
  path: '/',
  element: <AppLayout />,
  children: [
    { index: true, element: <Navigate to='/posts'/>},
    { path: 'posts', element: <PostList /> },
    { path: 'users', element: <UserList /> },
    { path: 'todos', element: <TodoList /> },
  ],
};

export const router = createBrowserRouter([routerConfig]);
