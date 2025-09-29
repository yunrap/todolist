import React from "react";

const TodoItem = ({ todo, onClickDelete }) => {
  return (
    <>
      <div>
        <li>{todo.text}</li>
        <button onClick={() => onClickDelete(todo.id)}>삭제</button>
      </div>
    </>
  );
};

export default React.memo(TodoItem);
