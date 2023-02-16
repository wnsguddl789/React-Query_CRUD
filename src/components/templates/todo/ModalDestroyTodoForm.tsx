import { withModal } from "@hocs";

import { Modal, TodoDestroyForm } from "@components";

const ModalDestroyTodoForm = withModal(({ onClose, ...props }) => {
  return (
    <Modal onClose={onClose} onSubmit={props.onSubmit}>
      <TodoDestroyForm {...props} />
    </Modal>
  );
});

export default ModalDestroyTodoForm;
