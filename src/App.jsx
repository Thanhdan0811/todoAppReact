import { useReducer, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { initState } from "./reducer";
import { contextMain } from "./reducer";
import reducer from "./reducer/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  console.log("app", state);

  return (
    <contextMain.Provider value={{ reducer: { state, dispatch } }}>
      <div className="App">
        <Header />
        <main>
          <CreateTodo />
        </main>
        <div className="d-flex container">
          {state.todoList.length > 0 ? (
            <TodoList todoList={state.todoList} />
          ) : (
            <h3 className="text-center w-full flex-grow-1">What are your plans ?</h3>
          )}
        </div>
      </div>
    </contextMain.Provider>
  );
}

export default App;
