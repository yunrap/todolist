import React, { useState, useRef, useEffect } from "react";
import { Todo } from "@/types/todo";
import { Input } from "../../ui/input";

const EditableInput = ({
  todo,
  value,
  onSave,
}: {
  todo: Todo;
  value: string;
  onSave: (value: string) => void;
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(e.target.value);
  };

  const handleBlur = () => {
    finishEditing();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      finishEditing();
    }
  };

  const finishEditing = () => {
    setIsEditing(false);
    if (editValue !== value) {
      onSave(editValue);
    }
  };

  return isEditing ? (
    <Input
      ref={inputRef}
      value={editValue}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    />
  ) : (
    <span
      className={`border-b ${todo.checkYn === "Y" ? "line-through text-gray-400" : ""}`}
      onDoubleClick={handleDoubleClick}
    >
      {value}
    </span>
  );
};

export default EditableInput;
