import PropTypes from 'prop-types';
// import clsx from 'clsx';
import {
  ProfileCard,
  ProfileDescription,
  ProfileAvatar,
  ProfileName,
  ProfileStats,
  ProfileStat,
  ProfileQuantity,
  ProfileLabel,
  ProfileTagLocation,
} from './Profile.styled.js';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => (
  <ProfileCard>
    <ProfileDescription>
      <ProfileAvatar src={avatar} alt="User avatar" />
      <ProfileName>{username}</ProfileName>
      <ProfileTagLocation>@{tag}</ProfileTagLocation>
      <ProfileTagLocation>{location}</ProfileTagLocation>
    </ProfileDescription>

    <ProfileStats>
      <ProfileStat>
        <ProfileLabel>Followers</ProfileLabel>
        <ProfileQuantity>{followers}</ProfileQuantity>
      </ProfileStat>
      <ProfileStat>
        <ProfileLabel>Views</ProfileLabel>
        <ProfileQuantity>{views}</ProfileQuantity>
      </ProfileStat>
      <ProfileStat>
        <ProfileLabel>Likes</ProfileLabel>
        <ProfileQuantity>{likes}</ProfileQuantity>
      </ProfileStat>
    </ProfileStats>
  </ProfileCard>
);

Profile.propTypes = {
  user: PropTypes.exact({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
