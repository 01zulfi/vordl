import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import useGetUser from '../../user/use-get-user';

interface HomeProps {
  redirectIfLoggedIn: boolean;
}

const Home: FC<HomeProps> = function Home({ redirectIfLoggedIn }) {
  const navigate = useNavigate();
  const { isLoading } = useGetUser({
    onSuccess: () => {
      if (redirectIfLoggedIn) navigate('dashboard');
    },
  });

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
