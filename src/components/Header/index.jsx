import React, { useReducer, useState } from "react";
import { TOGGLE_THEME } from "../../reducer/constanst";
import reducer, { initState } from "../../reducer/reducer";
import Logo from "../Logo/index";

export default function Header() {
  const [theme, setTheme] = useState("Dark");

  const [state, dispatch] = useReducer(reducer, initState);

  const handleClickChangeTheme = () => {
    setTheme(state == "Dark" ? "Light" : "Dark");
    dispatch({ type: TOGGLE_THEME, payload: null });
  };

  return (
    <>
      <header className="header-main">
        <div className="container header-wrap">
          <div className="logo">
            <Logo />
          </div>

          <div className="title">
            <h1>React Todo App</h1>
          </div>

          <div className="toggle-theme">
            <button className="btn btn-theme" onClick={handleClickChangeTheme}>
              {theme}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
