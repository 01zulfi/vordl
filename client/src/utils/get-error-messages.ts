// this is how the server is sending in validation errors
interface ValidationErrorInterface {
  location: string;
  msg: string;
  param: string;
  value: string;
}

// this is how axios is structuring the response
interface ErrorInterface {
  response: {
    data: {
      message: string | ValidationErrorInterface[];
    };
  };
}

// puts all errors into an array from the error object received from axios
const getErrorMessages = (err: ErrorInterface): string[] => {
  if (!err) return [''];

  if (err.response.data.message instanceof Array) {
    return err.response.data.message.map((e) => e.msg);
  }

  return [err.response.data.message];
};

export default getErrorMessages;
export type { ErrorInterface };
