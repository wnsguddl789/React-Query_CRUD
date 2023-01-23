import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
  onSubmit: () => void;
}

const Modal = ({ children, onClose, onSubmit }: Props) => {
  return (
    <div>
      {children}
      <button onClick={onClose}>닫기</button>
      <button onClick={onSubmit}>닫기</button>
    </div>
  );
};

export default Modal;
