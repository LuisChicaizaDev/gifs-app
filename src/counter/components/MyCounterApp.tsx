import { useCounter } from '../hooks/useCounter';

export const MyCounterApp = () => {
  // Desestrucutamos el objeto devuelto del custom hook
  const { counter, handleAdd, handleSubtract, handleReset } = useCounter(0);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1>Counter: {counter} </h1>

      <div
        style={{
          display: 'flex',
          gap: '16px',
        }}
      >
        <button onClick={handleAdd}>+1</button>
        <button onClick={handleSubtract}>-1</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};
