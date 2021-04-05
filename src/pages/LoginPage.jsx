import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../reducer/user/operations';

const LoginPage = () => {
  const dispatch = useDispatch();
  // TODO: delete initial data
  const [email, setEmail] = useState('test.user.one@mail.com');
  const [password, setPassword] = useState('12345678');

  const handleChangeLogin = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login({ email, password }));
  };

  return (
    <div className="login-page">
      <fieldset>
        <legend>Login</legend>

        <form onSubmit={handleSubmit}>
          <label>
            <span>login:</span>
            <input
              type="text"
              value={email}
              placeholder="email"
              onChange={handleChangeLogin}
            />
          </label>

          <label>
            <span>password:</span>
            <input
              type="text"
              value={password}
              placeholder="password"
              onChange={handleChangePassword}
            />
          </label>

          <button type="submit">Login</button>
        </form>
      </fieldset>
    </div>
  );
};

export default LoginPage;
