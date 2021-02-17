import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import HomeWorksPage from './pages/HomeWorksPage';
import BooksPage from './pages/BooksPage';
import TestPage from './pages/TestPage';
import AboutPage from './pages/AboutPage';

export const routes = [
  {
    path: '/',
    label: 'Home',
    component: HomePage,
  },
  {
    path: '/users-page',
    label: 'UsersPage',
    component: UsersPage,
  },
  {
    path: '/home-works',
    label: 'HomeWorksPage',
    component: HomeWorksPage,
  },
  {
    path: '/books',
    label: 'BooksPage',
    component: BooksPage,
  },
  {
    path: '/tests',
    label: 'TestPage',
    component: TestPage,
  },
  {
    path: '/about',
    label: 'AboutPage',
    component: AboutPage,
  },
];
