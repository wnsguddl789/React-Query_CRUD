import * as TodoSchema from "./todo";

export type Inputs = TodoSchema.CreateTodoInputs | TodoSchema.UpdateTodoInputs;

export * from "./auth";
export * from "./todo";
