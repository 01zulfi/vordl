import { useMutation, useQueryClient } from '@tanstack/react-query';
import login from './login';
import getErrorMessages, {
  ErrorInterface,
} from '../../../utils/get-error-messages';
import useGetUser from '../../../user/use-get-user';

const useLogin = () => {
  const queryClient = useQueryClient();
  const { data: user, isLoading: isUserLoading } = useGetUser({});
  const mutation = useMutation(login, {
    onSuccess: () => {
      queryClient.invalidateQueries(['get-user']);
    },
  });

  return {
    ...mutation,
    shouldLogin: () => !user,
    login: mutation.mutate,
    errors: () => getErrorMessages(mutation.error as ErrorInterface),
    isLoading: mutation.isLoading || isUserLoading,
  };
};

export default useLogin;
