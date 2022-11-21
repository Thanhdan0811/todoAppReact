import { ADD_TODO, SELECT_TODO, TOGGLE_THEME } from "./constanst";

export const initState = {
  theme: "Light",
  todoList: [],
  selectedTodo : null
};

// action : type, payload
const reducer = (state, action) => {
  const { type, payload } = action;
  let newState = { ...state };

  switch (type) {
    case TOGGLE_THEME:
      newState.theme = toggleTheme(newState.theme);
      break;
    case ADD_TODO:
      newState.todoList = addTodoToList(newState.todoList, payload);
      break;
    case SELECT_TODO:
      newState.selectedTodo = {...payload};
      break;
    default:
      break;
  }

  return newState;
};

export default reducer;

const toggleTheme = (currenttTheme) => {
  let nextTheme = "";

  nextTheme = currenttTheme == "Light" ? "Dark" : "Light";
  if (nextTheme == "Light") {
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
  }

  return nextTheme;
};

const addTodoToList = (currentList, todo) => {
  const idTodo = Math.random() * 100 + todo.todoName.split(" ").join('');
  todo.id = idTodo;
  let newList = [...currentList, todo];
  return newList;
};

const selecteTodo = (todo) => {
  
}
