const TodoList = ({ todoList, classes, onClickItem }) => {

  console.log('Todo List render');

  return (
    <div className={classes + " todo-list"}>
      {todoList.map((todo, idx) => (
        <div className="todo-item" key={todo.id} onClick={() => onClickItem(todo)}>
          <p >{todo?.todoName || "todo number" + (idx + 1)}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
