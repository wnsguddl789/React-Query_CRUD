import { CreateTodoInputs, UpdateTodoInputs, SignUpResponseType, Todo } from '@types';

import { useMutation, useQuery } from '@tanstack/react-query';

import { useTodoStore } from '@models';

interface HasToken {
  token: SignUpResponseType['token'];
}

interface CreateTodoMutation extends HasToken {
  input: CreateTodoInputs;
}
interface UpdateTodoMutation extends HasToken {
  input: UpdateTodoInputs;
}

interface DestroyTodoMutation extends HasToken {
  id: Todo['id'];
}

export default function useTodoMutation() {
  const todoStore = useTodoStore((state) => state);

  const { data: createTodoData, mutate: createTodoMutate } = useMutation(
    ({ input, token }: CreateTodoMutation) => {
      return todoStore.cratedTodo(input, token);
    },
    {
      onSuccess: () => {},
      onError: () => {},
    }
  );

  const { data: updateTodoData, mutate: updateTodoMutate } = useMutation(
    ({ input, token }: UpdateTodoMutation) => {
      return todoStore.updateTodo(input, token);
    },
    {
      onSuccess: () => {},
      onError: () => {},
    }
  );

  const { data: deleteTodoData, mutate: deleteTodoMutate } = useMutation(
    ({ id, token }: DestroyTodoMutation) => {
      return todoStore.destroyTodo(id, token);
    },
    {
      onSuccess: () => {},
      onError: () => {},
    }
  );

  return {
    createTodoData,
    createTodoMutate,
    updateTodoData,
    updateTodoMutate,
    deleteTodoData,
    deleteTodoMutate,
  };
}
