import { Todo } from "@/types/todo";
import TodoItem from "./TodoItem";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
type TodoListProps = {
  todos: Todo[];
  onDelete: (id: string) => void;
  onCheck: (id: string) => void;
  onUpdateValue: (newText: string, id: string) => void;
  onToggleStar: (id: string) => void;
  onDragEnd: (event: DragEndEvent) => void;
};

const TodoList = ({
  todos,
  onDelete,
  onCheck,
  onUpdateValue,
  onToggleStar,
  onDragEnd,
}: TodoListProps) => {
  const sortedTodoList = [...todos].sort((a, b) => {
    return Number(b.isStarred === true) - Number(a.isStarred === true);
  });

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <ul className="py-10 flex flex-col gap-6 ">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={onDragEnd}
      >
        <SortableContext
          items={sortedTodoList}
          strategy={verticalListSortingStrategy}
        >
          {sortedTodoList.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={onDelete}
              onCheck={onCheck}
              onUpdateValue={onUpdateValue}
              onToggleStar={onToggleStar}
            />
          ))}
        </SortableContext>
      </DndContext>
    </ul>
  );
};

export default TodoList;
