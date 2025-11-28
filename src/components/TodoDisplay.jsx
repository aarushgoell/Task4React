export function TodoDisplay({ singleTodo, isDone, id, todolist, setTodoList }) {
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
        <div>{singleTodo}</div>
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
