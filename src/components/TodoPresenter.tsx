import { Todo } from "@/types/todo";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
type TodoPresenterProps = {
  todos: Todo[];
  input: string;
  onAdd: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDelete: (id: string) => void;
  onCheck: (id: string) => void;
  onUpdateValue: (newText: string, id: string) => void;
  onToggleStar: (id: string) => void;
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
      />
    </>
  );
};
export default TodoPresenter;
