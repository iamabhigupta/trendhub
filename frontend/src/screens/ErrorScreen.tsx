import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import Header from '../components/Header';

const ErrorScreen = () => {
  const error = useRouteError();
  return (
    <>
      <Header />
      <div>
        <p>
          {isRouteErrorResponse(error)
            ? 'This page does not exist'
            : 'An unexpected error occured.'}
        </p>
      </div>
    </>
  );
};

export default ErrorScreen;
