import React, { useContext, useReducer, useState } from "react";
import { ADD_TODO, contextMain, initState } from "../../reducer";
import InputCustom from "../InputCustom";

export default function CreateTodo() {
  const [todoName, setTodoName] = useState("");
  const [todoDetail, setTodoDetail] = useState("");

  const {reducer : contextReducer} = useContext(contextMain);


  console.log("createTOdo", contextReducer);

  const addTodo = () => {
    console.log(contextReducer.state);
    contextReducer.dispatch({ type: ADD_TODO, payload: { todoName, todoDetail } });
    setTodoName('');
    setTodoDetail('');
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
