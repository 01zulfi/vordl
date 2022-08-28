import { useMutation, useQueryClient } from '@tanstack/react-query';
import signUp from './sign-up';
import getErrorMessages, {
  ErrorInterface,
} from '../../../utils/get-error-messages';
import useGetUser from '../../../user/use-get-user';

const useSignUp = () => {
  const queryClient = useQueryClient();
  const { data: user, isLoading: isUserLoading } = useGetUser({});
  const mutation = useMutation(signUp, {
    onSuccess: () => {
      queryClient.invalidateQueries(['get-user']);
    },
  });

  return {
    ...mutation,
    shouldSignUp: () => !user,
    signUp: mutation.mutate,
    errors: () => getErrorMessages(mutation.error as ErrorInterface),
    isLoading: mutation.isLoading || isUserLoading,
  };
};

export default useSignUp;
