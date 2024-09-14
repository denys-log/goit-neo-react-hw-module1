import styles from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles.wrapper}>
      <div>
        <img src={image} alt="User avatar" className={styles.avatar} />
        <p className={styles.name}>{name}</p>{' '}
        <p className={styles.tag}>@{tag}</p>{' '}
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li className={styles.statsItem}>
          <span>Followers</span>{' '}
          <span className={styles.statsCount}>{stats.followers}</span>
        </li>
        <li className={styles.statsItem}>
          <span>Views</span>{' '}
          <span className={styles.statsCount}>{stats.views}</span>
        </li>
        <li className={styles.statsItem}>
          <span>Likes</span>{' '}
          <span className={styles.statsCount}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
