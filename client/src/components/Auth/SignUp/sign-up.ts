import axios from 'axios';
import requestOptions from '../../../utils/request-options';
import API_URL from '../../../utils/api-url';

const requestUrl = `${API_URL}/v1/user/register`;

const signUp = async ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}) => axios.post(requestUrl, { name ,email, password }, { ...requestOptions });

export default signUp;

