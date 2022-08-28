import { FC, FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../../Form';
import Button from '../../Button';
import Input, { onTextInputChange } from '../../Input';
import useSignUp from './use-sign-up';
import Link from '../../Link';

const SignUp: FC = function Login() {
  const navigate = useNavigate()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signUpMutation = useSignUp();

  if (!signUpMutation.shouldSignUp()) {
    return (
      <>
        <h1>Already signed in</h1>
        <Link to="/dashboard" type="internal" styling="link">
          Go to dashboard
        </Link>
      </>
    );
  }

  if (signUpMutation.isLoading) {
    return <div>Loading...</div>;
  }
  
  

  const onSignUpFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signUpMutation.signUp({ name, email, password }, {onSuccess: () => navigate('/dashboard')});
  };

  return (
    <section>
      <Form onSubmit={onSignUpFormSubmit}>
        <label htmlFor="name">
          Name
          <Input
            id="name"
            placeholder="name"
            type="text"
            name="name"
            value={name}
            onChange={onTextInputChange(setName)}
          />
        </label>

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

        {signUpMutation.isError && signUpMutation.errors().map((error) => <div key={error}>{error}</div>)}
      </Form>
    </section>
  );
};

export default SignUp;
