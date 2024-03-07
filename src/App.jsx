import React, { useCallback, useState } from "react";
import "./App.css";
import { ListResult } from "./components/ListResult";
import { Counter } from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);
  const [values, setValues] = useState([]);

  const MemoizedCounter = React.memo(Counter);

  const increment = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const addValue = (value, count) => {
    setValues([...value, count]);
    setCount(0);
  };
  return (
    <div>
      <ListResult data={values} />
      <MemoizedCounter count={count} onIncrement={increment} />
      <button onClick={() => addValue(values, count)}>Adicionar</button>
    </div>
  );
}

export default App;
