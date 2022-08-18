import { FC } from 'react';

const TextArea: FC<any> = function TextArea(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <textarea {...props} />;
};

export default TextArea;
