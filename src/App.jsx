//import './App.css';
import { UserCard } from './exercises/user-card/user-card';
import user from './exercises/user-card/user.json';

export function App() {
  return (
    <UserCard
      name={user.name}
      age={user.age}
      phoneNumber={user.phoneNumber}
      address={user.address}
    />
  );
}