import React, { useMemo, useRef } from 'react';
import _ from 'lodash';
import axios from 'axios';
import { useState, useEffect, useCallback } from 'react';

const apiKey = 'd05f5f872f0f74667bcdb4179984cab2';

export const search = (query) =>
  axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
    )
    .then(({ data }) => data);

// PureComponent
const MovieSearch = React.memo(() => {
  const [query, setQuery] = useState('');
  const [movieList, setMovieList] = useState([]);
  const inputRef = useRef();

  const xObj = useMemo(() => ({ testKey: 'test' }), []);

  const handleInputChange = (e) => setQuery(e.target.value);

  const handleSearch = useCallback(
    _.debounce(
      (query) =>
        search(query)
          .then(({ results }) => setMovieList(results))
          .catch((error) => console.log(error.message)),
      300,
    ),
    [],
  );

  useEffect(() => {
    if (!query) return;

    handleSearch(query);
  }, [query]);

  useEffect(() => {
    console.log('new xObj');
  }, [xObj]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  console.log('render MovieSearch');

  return (
    <div className="movie-search">
      <h2>Movie Search</h2>

      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        ref={inputRef}
      />

      <ul>
        {movieList.map(({ id, original_title }) => (
          <li key={id}>{original_title}</li>
        ))}
      </ul>
    </div>
  );
});

export default MovieSearch;
