import Task from '../Task/Task'
import css from './TaskList.module.css'

export default function TaskList({ tasks, onDelete }) {
  return (
    <ul className={css.list_elem}>
      {tasks.map((task)=> (
        <li className={css.item_elem} key={task.id}>
          <Task data={task} onDelete={onDelete}/>
        </li>
      ))}
      </ul>
  )
}

