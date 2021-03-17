import React, { useContext } from 'react';
import UserContext from '../userContext';
import ThemeContext from '../themeContext';

const AboutPage = () => {
  const { user, addOneYear } = useContext(UserContext);
  const styles = useContext(ThemeContext);

  console.log('styles:', styles);

  return (
    <>
      <h1>About Page</h1>
      <p>user name: {user.firstName}</p>
      <p>user age: {user.age}</p>

      <button onClick={addOneYear}>add one year</button>
    </>
  );
};

export default AboutPage;
