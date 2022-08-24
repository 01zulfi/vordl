import axios from 'axios';
import requestOptions from '../../../utils/request-options';
import API_URL from '../../../utils/api-url';

const requestUrl = `${API_URL}/v1/user/login`;

const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => axios.post(requestUrl, { email, password }, { ...requestOptions });

export default login;
