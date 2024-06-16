import { InfoMessage } from './exercises/portal/info-message';

export function App() {
  return (
    <div>
      react portal demo
      <InfoMessage>this message will render in info-msg container, out of root container</InfoMessage>
    </div>
  );
}
