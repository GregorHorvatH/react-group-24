import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import axios from 'axios';
import queryString from 'query-string';

const useStyles = createUseStyles({
  list: {
    display: 'flex',
    flexDirection: 'column',
  },
});

const UsersPage = ({ location, history }) => {
  const classes = useStyles();
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState(
    queryString.parse(location.search).filter || '',
  );

  const filteredList = users.filter(({ name }) =>
    name.toLowerCase().includes(filter),
  );

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  useEffect(() => {
    history.push({
      ...location,
      search: `?filter=${filter}`,
    });
  }, [filter]);

  useEffect(() => {
    axios.get('http://localhost:8080/users').then(({ data }) => setUsers(data));
  }, []);

  return (
    <div className={classes.list}>
      <h1>Users Page</h1>

      <input type="text" value={filter} onChange={handleFilter} />

      {filteredList.map(({ id, name }) => (
        <Link
          to={{
            pathname: `${location.pathname}/${id}`,
            state: { filter },
          }}
          key={id}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

export default UsersPage;
