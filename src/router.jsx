import { Navigate, createBrowserRouter } from 'react-router-dom';
import { AppLayout } from './layouts/app-layout';
import { PostList } from './pages/post-list';
import { PostItem } from './pages/post-item';
import { UserList } from './pages/user-list';
import { TodoList } from './pages/todo-list';
import { loadPost, loadPosts } from './router-loaders/post-loader';
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
        { path: ':id', element: <PostItem />, loader: loadPost },
      ],
    },
    { path: 'users', element: <UserList />, loader: loadUsers },
    { path: 'todos', element: <TodoList /> },
  ],
};

export const router = createBrowserRouter([routerConfig]);
