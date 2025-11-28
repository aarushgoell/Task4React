import { useState } from "react";

export function TodoDisplay({
  singleTodo,
  isDone,
  id,
  todolist,
  setTodoList,
  setTodo,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [updatetodo, setUpdateTodo] = useState(singleTodo);

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

    setTodoList(newTodoList);
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
