import Navigation from './components/Navigation';
import Content from './components/Content';
import styles from './app.module.css';

const App = () => (
  <div className={styles.app}>
    <Navigation />
    <Content />
  </div>
);

export default App;
