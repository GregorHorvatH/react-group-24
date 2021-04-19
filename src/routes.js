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
const Hoc = lazy(() => import('./pages/Hoc' /* webpackChunkName: "Hoc" */));
const Shop = lazy(() => import('./pages/Shop' /* webpackChunkName: "Shop" */));
const Cart = lazy(() => import('./pages/Cart' /* webpackChunkName: "Cart" */));
const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "LoginPage" */),
);
const LogoutPage = lazy(() =>
  import('./pages/LogoutPage' /* webpackChunkName: "LogoutPage" */),
);
const HooksPage = lazy(() =>
  import('./pages/HooksPage' /* webpackChunkName: "HooksPage" */),
);

export const routes = [
  {
    path: '/',
    label: 'Home',
    component: HomePage,
    exact: true,
    showInMenu: true,
    needsAuthorization: false,
  },
  {
    path: '/users',
    label: 'Users',
    component: UsersPage,
    exact: true,
    showInMenu: true,
    needsAuthorization: true,
  },
  {
    path: '/users/:id',
    label: 'User Details',
    component: UserDetailsPage,
    needsAuthorization: true,
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
    needsAuthorization: true,
  },
  {
    path: '/books',
    label: 'Books',
    component: BooksPage,
    showInMenu: true,
    needsAuthorization: true,
  },
  {
    path: '/counters',
    label: 'Counters',
    component: CountersPage,
    showInMenu: true,
    needsAuthorization: true,
  },
  {
    path: '/tests',
    label: 'Test',
    component: TestPage,
    showInMenu: true,
    needsAuthorization: false,
  },
  {
    path: '/props-tests',
    label: 'Props Test',
    component: PropsTestPage,
    showInMenu: true,
    needsAuthorization: true,
  },
  {
    path: '/todos',
    label: 'Todos',
    component: TodosPage,
    showInMenu: true,
    needsAuthorization: true,
  },
  {
    path: '/hoc',
    label: 'HOC',
    component: Hoc,
    showInMenu: true,
    needsAuthorization: true,
  },
  {
    path: '/shop',
    label: 'Shop',
    component: Shop,
    showInMenu: true,
    needsAuthorization: true,
  },
  {
    path: '/cart',
    label: 'Cart',
    component: Cart,
    showInMenu: true,
    needsAuthorization: true,
  },
  {
    path: '/about',
    label: 'About',
    component: AboutPage,
    showInMenu: true,
    needsAuthorization: true,
  },
  {
    path: '/login',
    label: 'Login',
    component: LoginPage,
    showInMenu: true,
    needsAuthorization: false,
  },
  {
    path: '/logout',
    label: 'Logout',
    component: LogoutPage,
    showInMenu: true,
    needsAuthorization: true,
  },
  {
    path: '/hooks',
    label: 'HooksPage',
    component: HooksPage,
    showInMenu: true,
    needsAuthorization: false,
  },
];
