import { create } from "zustand";
import { Todo, CreateTodoInputs, UpdateTodoInputs } from "@types";
import { api } from "@config";

interface State {
  todoList: Todo[];

  setTodoList: (todoList: Todo[]) => void;
  sortTodoListOrderByUpdatedAt: (todo: Todo) => void;

  fetchTodoList: () => Promise<Todo[]>;
  fetchTodo: (id: Todo["id"]) => Promise<Todo>;
  cratedTodo: (input: CreateTodoInputs) => Promise<void>;
  updateTodo: (id: Todo["id"], input: UpdateTodoInputs) => Promise<void>;
  destroyTodo: (id: Todo["id"]) => Promise<void>;
}

const useTodoStore = create<State>((set, get) => ({
  // state
  todoList: [],

  // getState
  getTodoList: () => get().todoList,

  // setState
  sortTodoListOrderByUpdatedAt: (todo) => {
    const { todoList, setTodoList } = get();

    const sortedTodoList = [...todoList, todo].sort((a, b) => {
      return new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime();
    });
    setTodoList(sortedTodoList);
  },
  setTodoList: (todoList) => set(() => ({ todoList })),

  // actions
  fetchTodoList: async () => {
    return api.get("/todos");
  },
  fetchTodo: async (id) => {
    return api.get(`/todos/${id}`);
  },
  cratedTodo: async (input) => {
    return api.post("/todos", input);
  },
  updateTodo: async (id, input) => {
    return api.put(`/todos/${id}`, input);
  },
  destroyTodo: async (id) => {
    return api.delete(`/todos/${id}`);
  },
}));

export default useTodoStore;
