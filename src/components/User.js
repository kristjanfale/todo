import React from 'react';
import { useSelector } from 'react-redux';
import {} from '../features/user/userSlice';

const User = () => {
  const user = useSelector((state) => state.user);
  const { lastName, firstName, mail, phone } = user;

  return (
    <ul className='user'>
      <li className='user--name'>
        {firstName} {lastName}
      </li>
      <li className='user--detail'>
        <small>{mail}</small>
      </li>
      <li className='user--detail'>
        <small>{phone}</small>
      </li>
    </ul>
  );
};

export default User;
