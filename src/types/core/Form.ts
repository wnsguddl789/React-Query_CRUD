import { InputUnionTypes } from "@src/types";

import { UseFormRegister, FieldErrorsImpl } from "react-hook-form";

export interface FormInstanceType<Inputs extends InputUnionTypes> {
  register: UseFormRegister<Inputs>;
  errors: Partial<FieldErrorsImpl<Inputs>>;
}
