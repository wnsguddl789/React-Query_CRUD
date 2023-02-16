import { Todo } from "@types";
import { useQuery } from "@tanstack/react-query";
import { useTodoStore } from "@models";

export default function useTodoQuery() {
  const todoStore = useTodoStore();
  const {
    data: todoList,
    isLoading: isTodoListLoading,
    isError: isTodoListError,
    refetch: todoListRefetch,
  } = useQuery<Todo[]>(["todoList"], todoStore.fetchTodoList);

  return { todoList, isTodoListLoading, isTodoListError, todoListRefetch };
}
