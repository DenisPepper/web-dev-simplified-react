import { createPortal } from 'react-dom';

export function InfoMessage({ children }) {
  return createPortal(
    <div>{children}</div>,
    document.getElementById('info-msg')
  );
}
