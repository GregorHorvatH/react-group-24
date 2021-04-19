import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Navigation from './components/Navigation';
import Content from './components/Content';
import styles from './app.module.css';
// import Context from './userContext';
import ThemeContext from './themeContext';
import { getCurrenUser } from './reducer/user/operations';
import { getIsAppLoadingSelector } from './reducer/user/selectors';
import 'react-toastify/dist/ReactToastify.css';

const contextStyles = {
  font: 'Arial',
  fontSize: 456,
};

const App = () => {
  const dispatch = useDispatch();
  // const isAppLoading = useSelector(getIsAppLoadingSelector);
  const isAppLoading = false;

  useEffect(() => {
    dispatch(getCurrenUser());
  }, []);

  // const [user, setUser] = useState({
  //   firstName: 'Bobby',
  //   age: 15,
  // });

  // const addOneYear = () =>
  //   setUser((prev) => ({
  //     ...prev,
  //     age: prev.age + 1,
  //   }));

  return isAppLoading ? (
    <p>Loading...</p>
  ) : (
    <div className={styles.app}>
      <ThemeContext.Provider value={contextStyles}>
        {/* <Context.Provider value={{ user, addOneYear }}> */}
        <Navigation />
        <Content />
        <ToastContainer />
        {/* </Context.Provider> */}
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
