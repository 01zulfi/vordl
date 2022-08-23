import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import login from './login';
import getErrorMessages, {
  ErrorInterface,
} from '../../../utils/get-error-messages';

const useLogin = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate, isError, error, isLoading } = useMutation(login, {
    onSuccess: () => {
      queryClient.invalidateQueries(['get-user']);
      navigate('/dashboard');
    },
  });

  return {
    login: mutate,
    isError,
    errors: () => getErrorMessages(error as ErrorInterface),
    isLoading,
  };
};

export default useLogin;
