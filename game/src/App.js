import { useState, useEffect } from "react";
import {makeMap} from './master.js';

function App() {
  // useEffect(() => {
  //   fetch("/hello")
  //     .then((r) => r.json())
  //     .then((data) => setCount(data.count));
  // }, []);

  return (
    <div className="App">
      <h1>choose game size</h1>
      <button onClick={(makeMap(1))}>small</button>
      <button onClick={(makeMap(3))}>med</button>
      <button onClick={(makeMap(7))}>large</button>
    </div>
  );
}

export default App;