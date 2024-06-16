import { Navigate, createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './layouts/app-layout';
import { PostList } from './pages/post-list';
import { UserList } from './pages/user-list';
import { TodoList } from './pages/todo-list';
import { loadPosts } from './router-loaders/post-loader';
import { loadUsers } from './router-loaders/user-loader';

const routerConfig = {
  path: '/',
  element: <AppLayout />,
  children: [
    { index: true, element: <Navigate to='/posts' /> },
    {
      path: 'posts',
      children: [
        { index: true, element: <PostList />, loader: loadPosts },
        { path: ':id', element: <h1>Post with self id</h1> },
      ],
    },
    { path: 'users', element: <UserList />, loader: loadUsers },
    { path: 'todos', element: <TodoList /> },
  ],
};

export const router = createBrowserRouter([routerConfig]);
