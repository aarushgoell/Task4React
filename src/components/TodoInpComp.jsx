import { useState } from "react";

let id = 0;

export function TodoInpComp({
  setTodo,
  todo,
  setTodoList,
  error,
  setError,
  todolist,
}) {
  const [search, setSearch] = useState("");

  const [filteredTodos, setFilteredTodos] = useState();

  function filterTodo() {
    setFilteredTodos(todolist.filter((t) => t.todoname.includes(search)));
  }

  return (
    <div>
      <div class="input-cont">
        <div>Enter Todo:</div>

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

      <div>
        <div class="addbutton">
          <div
            onClick={() => {
              if (todo.length > 0) {
                setTodoList((alltodos) => [
                  ...alltodos,
                  { todoname: todo, todoId: id++, isDone: "NotDone" },
                ]);
                setTodo("");
                setError("");
              } else {
                setError("Todo is empty");
              }
            }}
          >
            Add Todo
          </div>
          <div class="search-container">
            <div
              onClick={() => {
                filterTodo();
              }}
            >
              Search Todo
            </div>
            <input
              class="search"
              type="text"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
