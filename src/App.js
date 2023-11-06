import React from 'react';
import AddUsers from './components/Users/AddUsers';
import UserList from './components/Users/UserList';
import { useState } from 'react';

const App = () => {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (user) => {
    console.log(user);
    setUserList((prev) => [...prev, { ...user, id: Math.random().toString() }]);
  };

  return (
    <div>
      <AddUsers onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
};

export default App;
