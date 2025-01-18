import formatDateToNow from '../../helpers/formatDateToNow';
import styles from './BlogCard.module.css'

const BlogCard = ({tag, poster, title, description, userName, avatar, postedAt}) => {
  console.log(tag)
  return (
  <div className={styles.card}>
  <div className={styles.cardHeader}>
    <img
      className={styles.cardPoster}
      src={poster}
      alt={tag}
    />
  </div>
  <div className={styles.cardBody}>
    <span className={styles.tag}>{tag}</span>
    <h2 className={styles.cardTitle}>{title}</h2>
    <p className={styles.cardText}>{description}
    </p>
  </div>
  <div className={styles.cardFooter}>
    <div className={styles.userBox}>
      <img
        className={styles.avatar}
        src={avatar}
        alt={postedAt}
      />
      <div>
        <h3 className={styles.userName}>{userName}</h3>
        <small className={styles.date}>{formatDateToNow(postedAt)}</small>
      </div>
    </div>
  </div>
</div>)
};
export default BlogCard;
