import * as AuthSchema from "./auth";
import * as TodoSchema from "./todo";

export type InputUnionTypes =
  | AuthSchema.SignInInputs
  | AuthSchema.SignUpInputs
  | TodoSchema.CreateTodoInputs
  | TodoSchema.UpdateTodoInputs;

export * from "./auth";
export * from "./todo";
