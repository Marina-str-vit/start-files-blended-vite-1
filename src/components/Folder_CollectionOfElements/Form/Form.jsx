import css from './Form.module.css'

export default function Form({ onAdd }) {
  
const handleSubmit = e => {
  e.preventDefault();
  onAdd({
    //ці дані взяли з джейсона? це об'єкт newTask
    id: Date.now(),
    text: e.target.elements.text.value,
  });
  e.target.reset(); //щоб скинути форму
}

  return (                      // передаємо щоб опрацьовувати відправки
    <form className={css.form} onSubmit={handleSubmit}>
    <input className={css.field} type="text" name="text" />
    <button className={css.btn} type="submit">Add task</button>
  </form>
  )
}

