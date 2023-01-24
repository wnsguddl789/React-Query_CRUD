import { CreateTodoInputs, FormInstanceType } from "@src/types";

interface Props extends FormInstanceType<CreateTodoInputs> {
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
