import { useTodoActions } from "@/hooks/useTodoActions";
import TodoPresenter from "./TodoPresenter";

const TodoContainer = () => {
  const {
    todos,
    input,
    handleChangeValue,
    handleAdd,
    handleDelete,
    handleCheck,
    handleUpdateValue,
    handleToggleStar,
    handleDragEnd,
  } = useTodoActions();

  return (
    <>
      <TodoPresenter
        todos={todos}
        input={input}
        onChangeValue={handleChangeValue}
        onUpdateValue={handleUpdateValue}
        onAdd={handleAdd}
        onDelete={handleDelete}
        onCheck={handleCheck}
        onToggleStar={handleToggleStar}
        onDragEnd={handleDragEnd}
      />
    </>
  );
};

export default TodoContainer;
