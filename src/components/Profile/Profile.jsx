import clsx from 'clsx';
import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={clsx(css.profile)}>
      <div>
        <img className={clsx(css.avatar)} src={image} alt="User avatar" />
        <p className={clsx(css.name)}>{name}</p>
        <p className={clsx(css.email)}>{tag}</p>
        <p className={clsx(css.location)}>{location}</p>
      </div>

      <ul className={clsx(css.list)}>
        <li className={clsx(css.sublist)}>
          <span className={clsx(css.text)}>Followers</span>
          <span className={clsx(css.stats)}>{stats.followers}</span>
        </li>
        <li className={clsx(css.sublist)}>
          <span className={clsx(css.text)}>Views</span>
          <span className={clsx(css.stats)}>{stats.views}</span>
        </li>
        <li className={clsx(css.sublist)}>
          <span className={clsx(css.text)}>Likes</span>
          <span className={clsx(css.stats)}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
