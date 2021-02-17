import React from 'react';
import { routes } from '../routes';
import styles from './content.module.scss';

const Content = () => {
  const { pathname } = window.location;

  return (
    <div className={styles.content}>
      {routes.map(
        ({ path, component: Component }) =>
          pathname === path && <Component key={path} />,
      )}

      {/* {pathname === '/' && <HomePage />}
      {pathname === '/users-page' && <UsersPage />}
      {pathname === '/home-works' && <HomeWorksPage />}
      {pathname === '/books' && <BooksPage />}
      {pathname === '/tests' && <TestPage />}
      {pathname === '/about' && <AboutPage />} */}
    </div>
  );
};

export default Content;
