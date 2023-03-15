import { ApolloError } from '@apollo/client';

interface ErrorMessageType {
  error?: ApolloError;
}

const ErrorMessage = ({ error }: ErrorMessageType) => (
  <div className="h-full w-full flex justify-center items-center">
    <span className="text-red-500">{error?.message}</span>
  </div>
);

export default ErrorMessage;
