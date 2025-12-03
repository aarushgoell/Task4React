import { useState } from "react";
import { TodoDisplay } from "./TodoDisplay";

let id = 0;

export function DisplayAllTodos({
  todolist,
  setTodoList,
  setTodo,
  todo,
  setError,
}) {
  const [filteredTodos, setFilteredTodos] = useState(todolist);
  const [checkFilter, setCheckFilter] = useState(false);
  // const [finalList,setFinalList] = useState(todolist);

  const [search, setSearch] = useState("");

  let renderList = todolist;

  function filterTodo() {
    setFilteredTodos(todolist.filter((t) => t.todoname.includes(search)));
    setCheckFilter(true);
  }

  function deleteTodo(id) {
    const newTodo = todolist.filter((tod) => tod.todoId != id);

    const newFilteredTodos = filteredTodos.filter((tod) => tod.todoId != id);

    setTodoList(newTodo);
    if (checkFilter) {
      setFilteredTodos(newFilteredTodos);
    }
  }

  renderList = checkFilter ? filteredTodos : todolist;

  return (
    <div>
      <div class="addbutton">
        <div
          onClick={() => {
            if (todo.length > 0) {
              setTodoList((alltodos) => [
                ...alltodos,
                { todoname: todo, todoId: id++, isDone: "NotDone" },
              ]);
              setCheckFilter(false);
              setTodo("");
              setError("");
            } else {
              setError("Todo is empty");
            }
          }}
        >
          Add Todo
        </div>
      </div>
      <div class="searchfather">
        <div class="search-container">
          <div
            onClick={() => {
              filterTodo();
            }}
            class="searchtodo"
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
      <div class="parstytod">
        <div>
          {renderList?.map((tod) => {
            const { todoname, isDone, todoId } = tod;
            return (
              <div key={todoId} class="fulltodo">
                <div class="stytod">
                  <TodoDisplay
                    singleTodo={todoname}
                    isDone={isDone}
                    id={todoId}
                    todolist={todolist}
                    setTodoList={setTodoList}
                    setTodo={setTodo}
                    setFilteredTodos={setFilteredTodos}
                    checkFilter={checkFilter}
                    filteredTodos={filteredTodos}
                  ></TodoDisplay>
                </div>
                <div
                  onClick={() => {
                    deleteTodo(todoId);
                  }}
                  class="delete"
                >
                  Delete
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
