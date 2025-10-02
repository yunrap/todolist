import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
type TodoPresenterProps = {
  input: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const TodoInput = ({ input, onChange, onAdd }: TodoPresenterProps) => {
  return (
    <>
      <div className="flex gap-2">
        <Input
          className="h-18 text-center"
          value={input}
          onChange={onChange}
          placeholder="할일을 입력하세요."
        ></Input>
        <Button className="h-18" onClick={onAdd}>
          등록
        </Button>
      </div>
    </>
  );
};

export default React.memo(TodoInput);
