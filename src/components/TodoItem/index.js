import './index.css'

const TodoItem = props => {
  const {todosDetails, deleteTodo} = props
  const {id, title} = todosDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  return (
    <li className="todo-item">
      <p className="title">{title}</p>
      <button className="delete-btn" type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
