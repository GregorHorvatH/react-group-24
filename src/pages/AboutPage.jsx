import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrenUser } from '../reducer/user/operations';
import {
  getUserSelector,
  getIsLoadingSelector,
} from '../reducer/user/selectors';

const AboutPage = () => {
  const dispatch = useDispatch();
  const { name, email } = useSelector(getUserSelector);
  const isLoading = useSelector(getIsLoadingSelector);

  // componentDidMount
  useEffect(() => {
    dispatch(getCurrenUser());
  }, [dispatch]);

  return (
    <div className="about-page">
      <h1>About Page</h1>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p>name: {name}</p>
          <p>email: {email}</p>
        </>
      )}
    </div>
  );
};

export default AboutPage;
