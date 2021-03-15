import { lazy } from 'react';

const HomePage = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "home-page" */),
);
const UsersPage = lazy(() =>
  import('./pages/UsersPage' /* webpackChunkName: "UsersPage" */),
);
const HomeWorksPage = lazy(() =>
  import('./pages/HomeWorksPage' /* webpackChunkName: "HomeWorksPage" */),
);
const BooksPage = lazy(() =>
  import('./pages/BooksPage' /* webpackChunkName: "BooksPage" */),
);
const CountersPage = lazy(() =>
  import('./pages/CountersPage' /* webpackChunkName: "CountersPage" */),
);
const TestPage = lazy(() =>
  import('./pages/TestPage' /* webpackChunkName: "TestPage" */),
);
const PropsTestPage = lazy(() =>
  import('./pages/PropsTestPage' /* webpackChunkName: "PropsTestPage" */),
);
const UserDetailsPage = lazy(() =>
  import(
    './pages/UserDetailsPageHook' /* webpackChunkName: "UserDetailsPage" */
  ),
);
const TodosPage = lazy(() =>
  import('./pages/TodosPage' /* webpackChunkName: "TodosPage" */),
);
const AboutPage = lazy(() =>
  import('./pages/AboutPage' /* webpackChunkName: "AboutPage" */),
);

export const routes = [
  {
    path: '/',
    label: 'Home',
    component: HomePage,
    exact: true,
    showInMenu: true,
  },
  {
    path: '/users',
    label: 'Users',
    component: UsersPage,
    exact: true,
    showInMenu: true,
  },
  {
    path: '/users/:id',
    label: 'User Details',
    component: UserDetailsPage,
  },
  // {
  //   path: '/user-details-hook',
  //   label: 'User Details Hook',
  //   component: UserDetailsPageHook,
  // },
  {
    path: '/home-works',
    label: 'Home Works',
    component: HomeWorksPage,
    showInMenu: true,
  },
  {
    path: '/books',
    label: 'Books',
    component: BooksPage,
    showInMenu: true,
  },
  {
    path: '/counters',
    label: 'Counters',
    component: CountersPage,
    showInMenu: true,
  },
  {
    path: '/tests',
    label: 'Test',
    component: TestPage,
    showInMenu: true,
  },
  {
    path: '/props-tests',
    label: 'Props Test',
    component: PropsTestPage,
    showInMenu: true,
  },
  {
    path: '/todos',
    label: 'Todos',
    component: TodosPage,
    showInMenu: true,
  },
  {
    path: '/about',
    label: 'About',
    component: AboutPage,
    showInMenu: true,
  },
];
