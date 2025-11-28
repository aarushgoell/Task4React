import { useState } from "react";

export function CounterBody() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>
        Count is: <span class="count">{counter}</span>
      </h1>

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
