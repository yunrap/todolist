import React, { useState } from "react";
import { Todo } from "../types/todo";
import { v4 as uuidv4 } from "uuid";
import { useTodoDispatch } from "../state/todo/TodoContext";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const TodoInput = () => {
  const [value, setValue] = useState("");
  const dispatch = useTodoDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!value.trim()) return;

    const newTodo: Todo = {
      id: uuidv4(),
      text: value,
      checkYn: "N",
      isStarred: false,
    };
    dispatch({ type: "ADD", payload: newTodo });

    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="할일을 입력하세요."
      ></Input>
      <Button>등록</Button>
    </form>
  );
};

export default React.memo(TodoInput);
