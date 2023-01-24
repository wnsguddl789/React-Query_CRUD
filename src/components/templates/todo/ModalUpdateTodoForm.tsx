import { withModalForm } from "@hocs";

import { Modal, TodoUpdateForm } from "@components";

import { UpdateTodoInputs, WithModalFormProps } from "@types";

const ModalUpdateTodoForm = withModalForm(
  ({ onClose, ...props }: WithModalFormProps<UpdateTodoInputs>) => {
    return (
      <Modal onClose={onClose} onSubmit={props.onSubmit}>
        <TodoUpdateForm {...props} />
      </Modal>
    );
  }
);

export default ModalUpdateTodoForm;
