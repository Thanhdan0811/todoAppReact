const TodoList = ({ todoList, classes, onClickItem, currentTodo }) => {

  console.log('Todo List render',currentTodo);

  return (
    <div className={classes + " todo-list"}>
      {todoList.map((todo, idx) => (
        <div className={ "todo-item" + (currentTodo?.id == todo.id ? " active" : '') } key={todo.id} onClick={() => onClickItem(todo)}>
          <p >{todo?.todoName || "todo number" + (idx + 1)}</p>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
