import React, { useReducer, useState } from "react";
import { ADD_TODO, initState } from "../../reducer";
import reducer from "../../reducer/reducer";
import InputCustom from "../InputCustom";

export default function CreateTodo() {
  const [todoName, setTodoName] = useState("");
  const [todoDetail, setTodoDetail] = useState("");
  const [state, dispatch] = useReducer(reducer, initState);

  console.log("createTOdo", state);

  const addTodo = () => {
    console.log(state);
    dispatch({ type: ADD_TODO, payload: { todoName, todoDetail } });
  };

  return (
    <>
      <div className="container">
        <div className="create-todo">
          {/* To do Name */}
          <div className="todo-item">
            <span className="title">To do name :</span>
            <div className="detail">
              <InputCustom
                name="todo-name"
                value={todoName}
                onChange={(e) => setTodoName(e.target.value)}
              />
            </div>
          </div>
          {/* Todo Details */}
          <div className="todo-item">
            <span className="title">To do detail :</span>
            <div className="detail">
              <InputCustom
                name="todo-detail"
                textarea={true}
                value={todoDetail}
                rows={1}
                onChange={(e) => setTodoDetail(e.target.value)}
              />
            </div>
          </div>

          <div className="pt-10px text-right">
            <button onClick={() => addTodo()} className="btn btn-dark">
              Add to do
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
