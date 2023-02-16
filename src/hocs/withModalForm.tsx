import { ComponentType } from "react";
import { ModalPortal } from "@components";

import { InputUnionTypes, WithModalFormProps as HocProps } from "@src/types";

const withModalForm = <ComponentProps extends InputUnionTypes>(
  Component: ComponentType<HocProps<ComponentProps>>
) => {
  return (props: HocProps<ComponentProps>) => {
    return (
      <ModalPortal>
        <Component {...props} />
      </ModalPortal>
    );
  };
};

export default withModalForm;
