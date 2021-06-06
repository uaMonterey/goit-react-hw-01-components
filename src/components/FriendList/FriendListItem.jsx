import React from 'react';

const FriendListItem = ({ friends }) => (
  <>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li key={id}>
        <h3>{name}</h3>
        <p>{isOnline}</p>
        <img src={avatar} alt={name} width="100" />
      </li>
    ))}
  </>
);

export default FriendListItem;
