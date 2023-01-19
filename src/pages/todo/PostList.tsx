import { useCallback, useEffect } from 'react';
import { withAuth } from '@helper';

import { useAuthStore, useTodoStore } from '@models';
import { useQuery } from '@tanstack/react-query';

export const TodoListPage = withAuth(() => {
  const todoStore = useTodoStore();
  const authStore = useAuthStore();

  const { data, isLoading, error, isError, refetch } = useQuery(['todoList'], () => todoStore.fetchTodoList(authStore.token), {
    retry: true,
    // onError: (e) => console.log(e),
  });

  console.log(data);
  // console.log(authStore.token);
  if (isLoading) return <span>loading...</span>;
  // if (isError) return <span>Error : ${error.message}</span>;
  return <div></div>;
});
