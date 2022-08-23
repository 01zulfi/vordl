import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import API_URL from '../utils/api-url';
import requestHeaders from '../utils/request-headers';

const requestUrl = `${API_URL}/v1/user`;

interface UserInterface {
  _id: string;
  name: string;
  email: string;
}

const getUser = async (): Promise<UserInterface> => {
  const response = await axios.get(requestUrl, { ...requestHeaders });
  return response.data.user;
};
const useGetUser = ({
  onSuccess,
  onError,
}: {
  onSuccess?: () => void;
  onError?: () => void;
}) => {
  const { isLoading, data } = useQuery(['get-user'], getUser, {
    onSuccess: () => onSuccess && onSuccess(),
    onError: () => onError && onError(),
    retry: false,
  });

  return { isLoading, user: data };
};

export default useGetUser;
