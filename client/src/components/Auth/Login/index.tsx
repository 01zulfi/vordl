import { FC, FormEvent, useState } from 'react';
import Form from '../../Form';
import Button from '../../Button';
import Input, { onTextInputChange } from '../../Input';
import useLogin from './use-login';
import Link from '../../Link';

const Login: FC = function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { shouldLogin, login, isLoading, isError, errors } = useLogin();

  if (!shouldLogin) {
    return (
      <>
        <h1>Already signed in</h1>
        <Link to="/dashboard" type="internal" styling="link">
          Go to dashboard
        </Link>
      </>
    );
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const onLoginFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <section>
      <Form onSubmit={onLoginFormSubmit}>
        <label htmlFor="email">
          Email
          <Input
            id="email"
            placeholder="Email"
            type="email"
            name="email"
            value={email}
            onChange={onTextInputChange(setEmail)}
          />
        </label>

        <label htmlFor="password">
          Password
          <Input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={onTextInputChange(setPassword)}
          />
        </label>

        <Button variant="contained" type="submit">
          Submit
        </Button>

        {isError && errors().map((error) => <div key={error}>{error}</div>)}
      </Form>
    </section>
  );
};

export default Login;
