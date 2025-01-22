import { useState } from "react"
import initionTasks from "../../../data/tasks.json"
import css from "./CollectionOfElements.module.css"
import Form from "../Form/Form"
import Filter from "../Filter/Filter"
import TaskList from "../TaskList/TaskList"



export default function CollectionOfElements () {
  const [tasks, setTasks] = useState(initionTasks);
  const [filter, setFilter] = useState('');
  {/*функ. додавання елементів для того щоб при відправки Форми її викликати і передати значення текстового поля */}
  const addTask = (newTask) => {
    // викликаємо функ. кот. поверне новий стан це для синхронизації
    // prevTask - це масив тасків значення стану Таскс на момент оновлення
    setTasks((prevTask) => {
      return [...prevTask, newTask] //розпилюємо що було і додаємо нові таски
    });
  };
  
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  };

  const visibleTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={css.container_collection}>
       {/* функ.зміна стану */}
    <Form onAdd={addTask}/>
    <Filter value={filter} onFilter={setFilter}/>
    <TaskList tasks={visibleTasks} onDelete={deleteTask}/>  {/* tasks передається як пропс і цей компонент малює нам список тасків, ідемо в папку TaskList- там буде форма з цими тасками */}
   
    </div>
  )
}
