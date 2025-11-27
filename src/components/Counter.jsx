import { useState } from "react";

export function Counter() {
  return (
    <div>
      <div class="counterhead">
        <h1>Welcome To My Counter</h1>
      </div>

      <CounterBody></CounterBody>
    </div>
  );
}

function CounterBody() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Count is: <span class = "count">{counter}</span></h1>

      <div class="counterbox">
        <div
          onClick={() => {
            setCounter((e) => e + 1);
          }}
        >
          Increment (+)
        </div>
        <div
          onClick={() => {
            setCounter((e) => e - 1);
          }}
        >
          Decrement (-)
        </div>
        <div
          onClick={() => {
            setCounter((e) => 0);
          }}
        >
          Reset 0
        </div>
      </div>
    </div>
  );
}
