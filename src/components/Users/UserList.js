import React from 'react';
import styles from './UserList.module.css';
import Card from '../UI/Card';

const UserList = ({ users }) => {
  console.log(UserList);
  return (
    <Card className={styles.users}>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.userName} ({user.age}세)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
