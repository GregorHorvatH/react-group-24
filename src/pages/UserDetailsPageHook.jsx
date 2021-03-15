import axios from 'axios';
import React, { useState, useEffect } from 'react';
import UserData from '../components/UserData';

const UserDetailsPageHook = ({
  history,
  location,
  match: {
    params: { id },
  },
}) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:8080/users/${id}`)
      .then(({ data }) => setUser(data));
  }, [id]);

  const handleInputChange = (e) => {
    setUser((prevState) => ({
      ...prevState,
      inputValue: e.target.value,
    }));
  };

  const handleButtonClick = () =>
    history.push({
      pathname: '/users',
      search: `?filter=${location.state.filter}`,
    });

  return (
    <div className="user-details">
      <h1>User Details</h1>

      <UserData user={user} />

      <input type="text" onChange={handleInputChange} value={user.inputValue} />
      <p>Hello: {user.inputValue}</p>

      <button onClick={handleButtonClick}>Back</button>
    </div>
  );
};

export default UserDetailsPageHook;
