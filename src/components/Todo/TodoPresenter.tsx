import { Todo } from "@/types/todo";
import TodoInput from "./List/TodoInput";
import TodoList from "./List/TodoList";
import { DragEndEvent } from "@dnd-kit/core";
type TodoPresenterProps = {
  todos: Todo[];
  input: string;
  onAdd: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: (id: string) => void;
  onCheck: (id: string) => void;
  onUpdateValue: (newText: string, id: string) => void;
  onToggleStar: (id: string) => void;
  onDragEnd: (event: DragEndEvent) => void;
};

const TodoPresenter = ({
  todos,
  input,
  onAdd,
  onChangeValue,
  onUpdateValue,
  onDelete,
  onCheck,
  onToggleStar,
  onDragEnd,
}: TodoPresenterProps) => {
  return (
    <>
      <TodoInput input={input} onChange={onChangeValue} onAdd={onAdd} />
      <TodoList
        todos={todos}
        onDelete={onDelete}
        onCheck={onCheck}
        onUpdateValue={onUpdateValue}
        onToggleStar={onToggleStar}
        onDragEnd={onDragEnd}
      />
    </>
  );
};
export default TodoPresenter;
