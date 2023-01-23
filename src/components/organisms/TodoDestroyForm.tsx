interface Props {
  onSubmit: () => void;
}

export default function TodoDestroyForm({ onSubmit }: Props) {
  return (
    <form onSubmit={onSubmit}>
      <button onClick={onSubmit}>삭제</button>
    </form>
  );
}
