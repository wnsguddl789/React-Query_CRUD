import { ComponentType } from "react";
import { ModalPortal } from "@src/components";

interface withModalFormProps {
  onClose: () => void;
  onSubmit: () => void;
}

const withModal = <ComponentProps extends withModalFormProps>(
  Component: ComponentType<ComponentProps>
) => {
  return (props: withModalFormProps) => {
    return (
      <ModalPortal>
        <Component {...(props as ComponentProps)} />
      </ModalPortal>
    );
  };
};

export default withModal;
