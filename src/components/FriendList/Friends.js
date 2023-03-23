import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { List } from './Friends.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <FriendListItem key={friend.id} {...friend} />
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      username: PropTypes.string,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
