import { withModalForm } from "@hocs";

import { Modal, TodoCreateForm } from "@components";

import { CreateTodoInputs, WithModalFormProps as HocProps } from "@types";

const ModalCreateTodoForm = withModalForm(
  ({ onClose, ...props }: HocProps<CreateTodoInputs>) => {
    return (
      <Modal onClose={onClose} onSubmit={props.onSubmit}>
        <TodoCreateForm {...props} />
      </Modal>
    );
  }
);

export default ModalCreateTodoForm;
