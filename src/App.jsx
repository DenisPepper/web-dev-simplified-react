import { ErrorBorder } from './exercises/error-border/error-border';
import { SomeForm } from './exercises/forward-ref/some-form';

export function App() {
  return (
    <ErrorBorder fallback={<h1>Error border fallback!</h1>}>
      <SomeForm />
    </ErrorBorder>
  );
}
