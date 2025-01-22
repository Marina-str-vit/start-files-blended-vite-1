import css from './Task.module.css';

export default function Task({ data: { id, text }, onDelete }) {
  return (
    <div className={css.container_elem}>
      <p className={css.text}>{text}</p>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

