import './index.css'

const TodoItem = props => {
  const {deleteUser, titleName} = props
  const {id, title} = titleName

  const onDelete = () => {
    deleteUser(id)
  }

  return (
    <li className="line-container">
      <div className="delete-item">
        <p className="paragraph">{title}</p>
        <button className="button" type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
