import { useReducer, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import Header from "./components/Header";
import TodoDetail from "./components/TodoDetail";
import TodoList from "./components/TodoList";
import { initState, SELECT_TODO } from "./reducer";
import { contextMain } from "./reducer";
import reducer from "./reducer/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initState);

  console.log("app", state);

  const handleClickItem = (todo) => {
    const currentTodoId = state.selectedTodo?.id || '';

    if (currentTodoId == todo.id) return;

    dispatch({type: SELECT_TODO, payload: {...todo}})
  }

  return (
    <contextMain.Provider value={{ reducer: { state, dispatch } }}>
      <div className="App">
        <Header />
        <main>
          <CreateTodo />
        </main>
        <div className="d-flex container">
          {state.todoList.length > 0 ? (
            <>
              <TodoList todoList={state.todoList} onClickItem={handleClickItem} classes='list-wrap'  currentTodo={state.selectedTodo}/>
              <TodoDetail  />
            </>
          ) : (
            <h3 className="text-center w-full flex-grow-1">What are your plans ?</h3>
          )}
        </div>
      </div>
    </contextMain.Provider>
  );
}

export default App;
