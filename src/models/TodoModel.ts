import { create } from 'zustand';
import { Todo, SignUpResponseType, CreateTodoInputs, UpdateTodoInputs } from '@types';
import { api } from '@config/api';

interface State {
  todoList: Todo[];
  loadingTodoList: boolean;
  loadingTodoDetail: boolean;

  setLoadingTodoList: (bool: boolean) => void;
  setLoadingTodoDetail: (bool: boolean) => void;
  setTodoList: (todoList: Todo[]) => void;
  sortTodoListOrderByUpdatedAt: (todo: Todo) => void;

  fetchTodoList: (token: SignUpResponseType['token']) => Promise<void>;
  fetchTodo: (id: Todo['id'], token: SignUpResponseType['token']) => Promise<void>;
  cratedTodo: (input: CreateTodoInputs, token: SignUpResponseType['token']) => Promise<void>;
  updateTodo: (input: UpdateTodoInputs, token: SignUpResponseType['token']) => Promise<void>;
  destroyTodo: (id: Todo['id'], token: SignUpResponseType['token']) => Promise<void>;
}

const useTodoStore = create<State>((set, get) => ({
  // state
  todoList: [],
  loadingTodoList: false,
  loadingTodoDetail: false,

  // getState
  getTodoList: () => get().todoList,

  // setState
  setLoadingTodoList: (bool) => set(() => ({ loadingTodoList: bool })),
  setLoadingTodoDetail: (bool) => set(() => ({ loadingTodoDetail: bool })),
  sortTodoListOrderByUpdatedAt: (todo) => {
    const { todoList, setTodoList } = get();

    const sortedTodoList = [...todoList, todo].sort((a, b) => {
      return new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime();
    });
    setTodoList(sortedTodoList);
  },
  setTodoList: (todoList) => set(() => ({ todoList })),

  // actions
  fetchTodoList: async (token) => {
    return api.get('/todos', { headers: { Authorization: token } });
  },
  fetchTodo: async (id, token) => {
    return api.get(`/todos/${id}`, { headers: { Authorization: token } });
  },
  cratedTodo: async (input, token) => {
    return api.post('/todos', input, { headers: { Authorization: token } });
  },
  updateTodo: async (input, token) => {
    return api.put('/todos', input, { headers: { Authorization: token } });
  },
  destroyTodo: async (id, token) => {
    return api.delete(`/todos/${id}`, { headers: { Authorization: token } });
  },
}));

export default useTodoStore;
