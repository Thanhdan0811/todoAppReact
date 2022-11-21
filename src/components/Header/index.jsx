import React, { memo, useContext, useReducer, useState } from "react";
import { contextMain } from "../../reducer";
import { TOGGLE_THEME } from "../../reducer/constanst";
import Logo from "../Logo/index";

export default function Header() {
  const [theme, setTheme] = useState("Dark");
  const { reducer: contextReducer } = useContext(contextMain);

  console.log("header", contextReducer.state);

  const handleClickChangeTheme = () => {
    setTheme(contextReducer.state == "Dark" ? "Light" : "Dark");
    contextReducer.dispatch({ type: TOGGLE_THEME, payload: null });
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
};
