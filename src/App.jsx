import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Navigation from './components/Navigation';
import Content from './components/Content';
import styles from './app.module.css';
import Context from './userContext';
import ThemeContext from './themeContext';
import 'react-toastify/dist/ReactToastify.css';

const contextStyles = {
  font: 'Arial',
  fontSize: 456,
};

const App = () => {
  const [user, setUser] = useState({
    firstName: 'Bobby',
    age: 15,
  });

  const addOneYear = () =>
    setUser((prev) => ({
      ...prev,
      age: prev.age + 1,
    }));

  return (
    <div className={styles.app}>
      <ThemeContext.Provider value={contextStyles}>
        <Context.Provider value={{ user, addOneYear }}>
          <Navigation />
          <Content />
          <ToastContainer />
        </Context.Provider>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
