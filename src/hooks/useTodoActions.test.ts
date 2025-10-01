import { todoReducer } from "./useTodoActions";
import { Todo } from "@/types/todo";

jest.mock("uuid", () => ({
  v4: () => "mocked-uuid",
}));

describe("todoReducer", () => {
  const todoSample: Todo = {
    id: "1",
    text: "할일1",
    checkYn: "N",
    isStarred: false,
  };

  test("ADD 액션", () => {
    const initialState: Todo[] = [];
    const action = { type: "ADD" as const, payload: todoSample };

    const newState = todoReducer(initialState, action);
    expect(newState).toHaveLength(1);
    expect(newState[0]).toEqual(todoSample);
  });

  test("DELETE 액션", () => {
    const initialState: Todo[] = [todoSample];
    const action = { type: "DELETE" as const, payload: "1" };

    const newState = todoReducer(initialState, action);
    expect(newState).toHaveLength(0);
  });

  test("TOGGLE_CHECK 액션", () => {
    const initialState: Todo[] = [todoSample];
    const action = { type: "TOGGLE_CHECK" as const, payload: "1" };

    const newState = todoReducer(initialState, action);
    expect(newState[0].checkYn).toBe("Y");
  });

  test("UPDATE_TEXT 액션", () => {
    const initialState: Todo[] = [todoSample];
    const action = {
      type: "UPDATE_TEXT" as const,
      payload: { id: "1", text: "수정된 텍스트" },
    };

    const newState = todoReducer(initialState, action);
    expect(newState[0].text).toBe("수정된 텍스트");
  });

  test("TOGGLE_STAR 액션", () => {
    const initialState: Todo[] = [todoSample];
    const action = { type: "TOGGLE_STAR" as const, payload: "1" };

    const newState = todoReducer(initialState, action);
    expect(newState[0].isStarred).toBe(true);
  });
});
