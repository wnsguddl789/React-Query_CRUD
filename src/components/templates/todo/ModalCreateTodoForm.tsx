import { withModalForm } from "@hocs";

import { Modal, TodoCreateForm } from "@components";

const ModalCreateTodoForm = withModalForm(({ onClose, ...props }) => {
  return (
    <Modal onClose={onClose} onSubmit={props.onSubmit}>
      <TodoCreateForm {...props} />
    </Modal>
  );
});

export default ModalCreateTodoForm;
