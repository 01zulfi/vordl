import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import login from './login';
import getErrorMessages, {
  ErrorInterface,
} from '../../../utils/get-error-messages';
import useGetUser from '../../../user/use-get-user';

const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { user, isLoading: isUserLoading } = useGetUser({});
  const { mutate, isError, error, isLoading } = useMutation(login, {
    onSuccess: () => {
      queryClient.invalidateQueries(['get-user']);
      navigate('/dashboard');
    },
  });

  return {
    shouldLogin: !user,
    login: mutate,
    isError,
    errors: () => getErrorMessages(error as ErrorInterface),
    isLoading: isLoading || isUserLoading,
  };
};

export default useLogin;
