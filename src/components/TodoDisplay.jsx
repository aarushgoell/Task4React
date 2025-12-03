import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../Redux/Slices/todoSlice";

export function TodoDisplay({
  singleTodo,
  isDone,
  id,
  // todolist,
  // setTodoList,
  setFilteredTodos,
  checkFilter,
  filteredTodos,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatetodo, setUpdateTodo] = useState(singleTodo);
  const todolist = useSelector((state) => state.Todo.allTodos);
  const dispatch = useDispatch();

  function toggleTodo(id) {
    const newTodoList = todolist.map((todo) => {
      if (todo.todoId === id) {
        return {
          ...todo,
          isDone: todo.isDone === "NotDone" ? "Done" : "NotDone",
        };
      }
      return todo;
    });

    const filteredTodosNewList = filteredTodos.map((todo) => {
      if (todo.todoId === id) {
        return {
          ...todo,
          isDone: todo.isDone === "NotDone" ? "Done" : "NotDone",
        };
      }
      return todo;
    });

    dispatch(addTodo(newTodoList));

    // setTodoList(newTodoList);
    if (checkFilter) {
      setFilteredTodos(filteredTodosNewList);
    }
  }

  return (
    <div>
      <div class="eachtodo">
        {isEditing ? (
          <input
            class="edittodo"
            type="text"
            value={updatetodo}
            onChange={(e) => {
              setUpdateTodo(e.target.value);
            }}
            onBlur={() => {
              if (updatetodo.length >= 1) {
                setIsEditing(false);
              }
            }}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === "Enter") setIsEditing(false);
            }}
          />
        ) : (
          <div
            onClick={() => {
              setIsEditing(true);
            }}
          >
            {updatetodo}
          </div>
        )}

        <div
          onClick={() => {
            toggleTodo(id);
          }}
          class="done"
        >
          {isDone}
        </div>
      </div>
    </div>
  );
}
