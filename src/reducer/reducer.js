import { TOGGLE_THEME } from "./constanst";

export const initState = {
  theme: "Light",
};

// action : type, payload
const reducer = (state, action) => {
  const { type, payload } = action;
  let newState = { ...state };

  switch (type) {
    case TOGGLE_THEME:
      newState.theme = toggleTheme(newState.theme);
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
