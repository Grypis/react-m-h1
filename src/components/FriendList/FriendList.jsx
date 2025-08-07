import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from './Friendlist.module.css';
console.log(css);

export const FriendList = friends => {
  console.log(friends);

  return (
    <ul>
      {friends.map(item => (
        <li key={item.id}>
          <FriendListItem
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};
