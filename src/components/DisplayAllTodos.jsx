import { TodoDisplay } from "./TodoDisplay";

export function DisplayAllTodos({ todolist, setTodoList, setTodo }) {
  function deleteTodo(id) {
    const newTodo = todolist.filter((tod) => tod.todoId != id);

    console.log(newTodo);

    setTodoList(newTodo);
  }

  return (
    <div class="parstytod">
      <div>
        {todolist.map((tod) => {
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
                  setTodo = {setTodo}
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
  );
}
