import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from './Friendlist.module.css';

export const FriendList = ({ friends }) => {
  return (
    <>
      <div className={css.container}>
        <h1 className={css.title}>FRIEND LIST</h1>
        <ul className={css.list}>
          {friends.map(({ avatar, name, isOnline, id }) => (
            <li className={css.sublist} key={id}>
              <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
