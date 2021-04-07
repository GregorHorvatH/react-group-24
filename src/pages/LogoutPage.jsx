import { useDispatch } from 'react-redux';
import { logout } from '../reducer/user/operations';

const LogoutPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(logout());
  };

  return (
    <div className="logout-page">
      <fieldset>
        <legend>Logout</legend>

        <form onSubmit={handleSubmit}>
          <button type="submit">Logout</button>
        </form>
      </fieldset>
    </div>
  );
};

export default LogoutPage;
