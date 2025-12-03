import { Counter } from "./components/Counter";
import { TodoList } from "./components/TodoList";
import { store } from "./Redux/store/store.js";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Counter></Counter>
      <TodoList></TodoList>
    </Provider>
  );
}

export default App;
