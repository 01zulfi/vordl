import { useNavigate } from 'react-router-dom';
import useGetUser from '../../user/use-get-user';

const Dashboard = function Dashboard() {
  const navigate = useNavigate();
  const user = useGetUser({
    onError: () => {
      navigate('/login');
    },
  });

  if (user.isLoading) return <div>Loading...</div>;

  if (!user.data) return null;

  return (
    <div>
      <h1>{user.data.name}</h1>
      <p>{user.data.email}</p>
    </div>
  );
};

export default Dashboard;
