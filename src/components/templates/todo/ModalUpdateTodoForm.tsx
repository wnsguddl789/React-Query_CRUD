import { withModalForm } from "@hocs";

import { Modal, TodoUpdateForm } from "@components";

const ModalUpdateTodoForm = withModalForm(({ onClose, ...props }) => {
  return (
    <Modal onClose={onClose} onSubmit={props.onSubmit}>
      <TodoUpdateForm {...props} />
    </Modal>
  );
});

export default ModalUpdateTodoForm;
