import { useNavigate } from 'react-router-dom';
import useGetUser from '../../user/use-get-user';

const Dashboard = function Dashboard() {
  const navigate = useNavigate();
  const { user, isLoading } = useGetUser({
    onError: () => {
      navigate('/login');
    },
  });

  if (isLoading) return <div>Loading...</div>;

  if (!user) return null;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
    </div>
  );
};

export default Dashboard;
