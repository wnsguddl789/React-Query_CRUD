import { Suspense, useState } from "react";
import { withAuth } from "@hocs";

import { useTodoMutation, useTodoQuery } from "@hooks";
import {
  Loading,
  ModalCreateTodoForm,
  ModalUpdateTodoForm,
  ModalDestroyTodoForm,
  TodoListTable,
} from "@components";

import { useForm } from "react-hook-form";
import { TodoResolver } from "@models";

import { Todo, CreateTodoInputs, UpdateTodoInputs } from "@types";

type ModalVisible = {
  CREATE: boolean;
  UPDATE: boolean;
  DESTROY: boolean;
};

export const TodoListPage = withAuth(() => {
  const [selectedTodoId, setSelectedTodoId] = useState<string | null>(null);
  const { todoList } = useTodoQuery();
  const { createTodoMutate, updateTodoMutate, destroyTodoMutate } =
    useTodoMutation();
  const {
    register: createRegister,
    handleSubmit: createHandleSubmit,
    formState: { errors: createErrors },
  } = useForm<CreateTodoInputs>({ resolver: TodoResolver.create });

  const {
    register: updateRegister,
    handleSubmit: updateHandleSubmit,
    formState: { errors: updateErrors },
  } = useForm<UpdateTodoInputs>({ resolver: TodoResolver.update });

  const [visible, setVisible] = useState<ModalVisible>({
    CREATE: false,
    UPDATE: false,
    DESTROY: false,
  });

  const handleModalVisible = (key: keyof ModalVisible, bool: boolean) => () => {
    setVisible({ ...visible, [key]: bool });
  };

  const onSubmitCreateTodo = createHandleSubmit((input: CreateTodoInputs) => {
    createTodoMutate.mutate(input);
  });

  const onSubmitUpdateTodo = updateHandleSubmit((input: UpdateTodoInputs) => {
    if (!selectedTodoId) return;

    updateTodoMutate.mutate({ id: selectedTodoId, input });
  });

  const onSubmitDestroyTodo = () => {
    if (!selectedTodoId) return;

    destroyTodoMutate.mutate(selectedTodoId);
  };

  const onClickTodoItem = (id: Todo["id"]) => setSelectedTodoId(id);

  return (
    <Suspense fallback={<Loading />}>
      <div>
        {visible.CREATE && (
          <ModalCreateTodoForm
            onClose={handleModalVisible("CREATE", true)}
            register={createRegister}
            errors={createErrors}
            onSubmit={onSubmitCreateTodo}
          />
        )}
        <button onClick={handleModalVisible("CREATE", true)}>
          할일 작성하기
        </button>
      </div>
      <div>
        {todoList && (
          <TodoListTable
            todoList={todoList}
            onClickTodoItem={onClickTodoItem}
          />
        )}
        {visible.UPDATE && (
          <ModalUpdateTodoForm
            onClose={handleModalVisible("UPDATE", false)}
            errors={updateErrors}
            register={updateRegister}
            onSubmit={onSubmitUpdateTodo}
          />
        )}
        {visible.DESTROY && (
          <ModalDestroyTodoForm
            onClose={handleModalVisible("DESTROY", false)}
            onSubmit={onSubmitDestroyTodo}
          />
        )}
      </div>
    </Suspense>
  );
});
