//import './App.css';
import { DataFetcher } from './exercises/custom-hooks/data-fetcher';
import { ThemeToggler } from './exercises/custom-hooks/theme-toggler';
import { ControledInput } from './exercises/custom-hooks/useLocalStorage';
import { UserCard } from './exercises/user-card/user-card';
import user from './exercises/user-card/user.json';

export function App() {
  return <ControledInput />;
}
