import { Todo } from "@types";

interface Props {
  todoList: Todo[];
  onClickTodoItem: (id: Todo["id"]) => void;
}

const TodoListTable = ({ todoList, onClickTodoItem }: Props) => {
  return (
    <table className="table-fixed border-separate border-spacing-2 border ">
      <thead>
        <tr>
          <th>id</th>
          <th>title</th>
          <th>content</th>
          <th>createdAt</th>
          <th>update</th>
          <th>destroy</th>
        </tr>
      </thead>
      <tbody>
        {todoList.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>{todo.content}</td>
            <td>{todo.createdAt}</td>
            <td>
              <button onClick={() => onClickTodoItem(todo.id)}>수정</button>
            </td>
            <td>
              <button onClick={() => onClickTodoItem(todo.id)}>삭제</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodoListTable;
