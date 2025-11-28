import { useState } from "react";


export function TodoInpComp({ setTodo, todo, error }) {
  return (
    <div>
      <div class="input-cont">
        <div class = "entertodo">Enter Todo:</div>

        <div>
          <input
            value={todo}
            type="text"
            placeholder="Enter Todo"
            class="inptod"
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
        </div>
      </div>

      <div class="error">{error.length ? error : ""}</div>
    </div>
  );
}
