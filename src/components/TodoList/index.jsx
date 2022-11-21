const TodoList = ({ todoList, classes }) => {
  return (
    <div className={classes + " "}>
      {todoList.map((todo, idx) => (
        <p key={idx}>{todo?.todoName || "không tồn tại"}</p>
      ))}
    </div>
  );
};

export default TodoList;
