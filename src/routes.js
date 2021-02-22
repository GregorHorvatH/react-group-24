import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import HomeWorksPage from './pages/HomeWorksPage';
import BooksPage from './pages/BooksPage';
import CountersPage from './pages/CountersPage';
import TestPage from './pages/TestPage';
import PropsTestPage from './pages/PropsTestPage';
import UserDetailsPage from './pages/UserDetailsPage';
import UserDetailsPageHook from './pages/UserDetailsPageHook';
import AboutPage from './pages/AboutPage';

export const routes = [
  {
    path: '/',
    label: 'Home',
    component: HomePage,
  },
  {
    path: '/users-page',
    label: 'Users',
    component: UsersPage,
  },
  {
    path: '/home-works',
    label: 'Home Works',
    component: HomeWorksPage,
  },
  {
    path: '/books',
    label: 'Books',
    component: BooksPage,
  },
  {
    path: '/counters',
    label: 'Counters',
    component: CountersPage,
  },
  {
    path: '/tests',
    label: 'Test',
    component: TestPage,
  },
  {
    path: '/props-tests',
    label: 'Props Test',
    component: PropsTestPage,
  },
  {
    path: '/user-details',
    label: 'User Details',
    component: UserDetailsPage,
  },
  {
    path: '/user-details-hook',
    label: 'User Details Hook',
    component: UserDetailsPageHook,
  },
  {
    path: '/about',
    label: 'About',
    component: AboutPage,
  },
];
