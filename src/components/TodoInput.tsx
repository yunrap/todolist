import React, { useState } from "react";

const TodoInput = ({ onAdd }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value.trim()) return;
    onAdd(value);

    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="할일을 입력하세요."
      ></input>
      <button>등록</button>
    </form>
  );
};

export default React.memo(TodoInput);
