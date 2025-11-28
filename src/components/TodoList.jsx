import { useEffect, useState } from "react";
import { DisplayAllTodos } from "./DisplayAllTodos";
import { TodoInpComp } from "./TodoInpComp";

export function TodoList() {
  const [todo, setTodo] = useState("");
  const [todolist, setTodoList] = useState([]);
  const [error, setError] = useState("");

  return (
    <div>
      <div class="todhead">TODOS APPLICATION</div>

      <TodoInpComp
        setTodo={setTodo}
        todo={todo}
        newTodoList
        setTodoList={setTodoList}
        error={error}
        setError={setError}
      ></TodoInpComp>

      <DisplayAllTodos
        todolist={todolist}
        setTodoList={setTodoList}
        setTodo = {setTodo}
      ></DisplayAllTodos>
    </div>
  );
}
