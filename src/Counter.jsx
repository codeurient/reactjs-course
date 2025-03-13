import useStore from "./useStore";

export default function Counter() {
  // 1) 'useStore' hookundan istifadə edərək, state-i və funksiyaları əldə edirik, sonra isə ekranda göstəririk.
  const { count, increment, decrement } = useStore();

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button onClick={decrement}>   -1   </button>
      <button onClick={increment}>   +1   </button>

    </div>
  );
}