import { ComponentType } from "react";
import { ModalPortal } from "@src/components";

import { Inputs as InputUnionTypes } from "@src/types";

import { UseFormRegister, FieldErrorsImpl } from "react-hook-form";

interface withModalFormProps<Inputs extends InputUnionTypes> {
  onClose: () => void;
  register: UseFormRegister<Inputs>;
  errors: Partial<FieldErrorsImpl<Inputs>>;
  onSubmit: () => void;
}

const withModalForm = <
  ComponentProps extends withModalFormProps<InputUnionTypes>
>(
  Component: ComponentType<ComponentProps>
) => {
  return (props: withModalFormProps<InputUnionTypes>) => {
    return (
      <ModalPortal>
        <Component {...(props as ComponentProps)} />
      </ModalPortal>
    );
  };
};

export default withModalForm;
