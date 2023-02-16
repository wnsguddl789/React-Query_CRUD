import { UseFormRegister, FieldErrorsImpl } from "react-hook-form";
import { UpdateTodoInputs } from "@src/types";

interface Props {
  register: UseFormRegister<UpdateTodoInputs>;
  errors: Partial<FieldErrorsImpl<UpdateTodoInputs>>;
  onSubmit: () => void;
}

export default function TodoUpdateForm({ register, errors, onSubmit }: Props) {
  return (
    <form onSubmit={onSubmit}>
      <input {...register("title", { required: true })} type="text" />
      <p>{errors.title?.message}</p>
      <input {...register("content", { required: true })} type="text" />
      <p>{errors.content?.message}</p>
      <button onClick={onSubmit}>수정</button>
    </form>
  );
}
