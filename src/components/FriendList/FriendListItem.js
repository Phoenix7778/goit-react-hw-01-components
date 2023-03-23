import PropTypes from 'prop-types';
import {
  FriendItem,
  FriendStatsLabel,
  FriendName,
  FriendAvatar,
} from './Friends.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <FriendStatsLabel stats={isOnline}></FriendStatsLabel>
      <FriendAvatar src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
