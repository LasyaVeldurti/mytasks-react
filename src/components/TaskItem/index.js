import './index.css'

const TaskItem = props => {
  const {taskDetails} = props
  const {inputTask, inputTag} = taskDetails
  return (
    <li className="li-container">
      <p className="task-name">{inputTask} </p>
      <p className="task-btn">{inputTag}</p>
    </li>
  )
}
export default TaskItem
