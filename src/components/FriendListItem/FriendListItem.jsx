import clsx from 'clsx';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img className={css.image} src={avatar} alt={name} width="84" />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.stat, isOnline ? css.online : css.offline)}>
        {isOnline ? 'online' : 'offline'}
      </p>
    </div>
  );
};
