import { UseFormRegister, FieldErrorsImpl } from "react-hook-form";
import { CreateTodoInputs } from "@src/types";

export interface Props {
  register: UseFormRegister<CreateTodoInputs>;
  errors: Partial<FieldErrorsImpl<CreateTodoInputs>>;
  onSubmit: () => void;
}

export default function TodoCreateForm({ register, errors, onSubmit }: Props) {
  return (
    <form onSubmit={onSubmit}>
      <input {...register("title", { required: true })} type="text" />
      <p>{errors.title?.message}</p>
      <input {...register("content", { required: true })} type="text" />
      <p>{errors.content?.message}</p>
      <button onClick={onSubmit}>생성</button>
    </form>
  );
}
