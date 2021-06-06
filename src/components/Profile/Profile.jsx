import PropTypes from 'prop-types';
import defaultImage from '../../image/defaultImage.png';

const Profile = ({
  user: {
    avatar = defaultImage,
    name,
    tag,
    location,
    stats: { followers, views, likes },
  },
}) => (
  <div className="profile">
    <div className="description">
      <img
        src={avatar}
        alt="Аватар пользователя"
        className="avatar"
        width="180"
      />
      <p className="name">{name}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers: </span>
        <span className="quantity">{followers}</span>
      </li>
      <li>
        <span className="label">Views: </span>
        <span className="quantity">{views}</span>
      </li>
      <li>
        <span className="label">Likes: </span>
        <span className="quantity">{likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number.isRequired).isRequired,
  }).isRequired,
};

export default Profile;
