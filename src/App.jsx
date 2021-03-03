import { ToastContainer } from 'react-toastify';
import Navigation from './components/Navigation';
import Content from './components/Content';
import styles from './app.module.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => (
  <div className={styles.app}>
    <Navigation />
    <Content />
    <ToastContainer />
  </div>
);

export default App;
