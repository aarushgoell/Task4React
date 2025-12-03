import { useEffect, useState } from "react";
import { DisplayAllTodos } from "./DisplayAllTodos";
import { TodoInpComp } from "./TodoInpComp";

export function TodoList() {
  const [todo, setTodo] = useState("");
  // const [todolist, setTodoList] = useState([]);
  const [error, setError] = useState("");

  return (
    <div>
      <div class="todhead">TODOS APPLICATION</div>

      <TodoInpComp setTodo={setTodo} todo={todo} error={error}></TodoInpComp>

      <DisplayAllTodos
        // todolist={todolist}
        // setTodoList={setTodoList}
        setTodo={setTodo}
        todo={todo}
        setError={setError}
      ></DisplayAllTodos>
    </div>
  );
}
