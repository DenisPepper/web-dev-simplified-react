export function App() {
  return (
    <>
      <div style={{ backgroundColor: 'green' }}>
        {import.meta.env.VITE_CONST}
      </div>
      <br />
      <div style={{ backgroundColor: 'red' }}>
        <span>переменная окружения SERVER будет не доступна на клиенте: </span>
        {import.meta.env.SERVER}
      </div>
    </>
  );
}
