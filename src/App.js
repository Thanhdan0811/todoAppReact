import { useReducer } from "react";
import CreateTodo from "./components/CreateTodo";
import Header from "./components/Header";
import { initState } from "./reducer";

function App() {
  const [state, dispatch] = useReducer(null, initState);

  console.log(state);

  return (
    <div className="App">
      <Header />
      <main>
        <CreateTodo />
      </main>
      <div>
        {state.todoList.map((todo) => (
          <p>{todo?.todoName || "không tồn tại"}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
