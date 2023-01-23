import { CreateTodoInputs, UpdateTodoInputs, Todo } from "@types";

import { useMutation } from "@tanstack/react-query";

import { useTodoStore } from "@models";

export default function useTodoMutation() {
  const todoStore = useTodoStore();

  const createTodoMutate = useMutation((input: CreateTodoInputs) => {
    return todoStore.cratedTodo(input);
  });

  const updateTodoMutate = useMutation(
    ({ id, input }: { id: Todo["id"]; input: UpdateTodoInputs }) => {
      return todoStore.updateTodo(id, input);
    }
  );

  const destroyTodoMutate = useMutation((id: Todo["id"]) => {
    return todoStore.destroyTodo(id);
  });

  return {
    createTodoMutate,
    updateTodoMutate,
    destroyTodoMutate,
  };
}
