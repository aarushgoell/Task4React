import { useState } from "react";

export function TodoList() {
  const [todo, setTodo] = useState("");
  const [todlist, setTodList] = useState([]);

  return (
    <div>
      <div class="todhead">TODOS APPLICATION</div>

      <TodoInpComp setTodo = {setTodo} todo = {todo}></TodoInpComp>

      <displayAllTodos></displayAllTodos>
    </div>
  );
}

function displayAllTodos(){


    




}


function TodoInpComp({setTodo,todo}) {
  return (
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
  );
}

function TodoDisplay({singleTodo}){

    return <div>
        
        {singleTodo}

    </div>

}
