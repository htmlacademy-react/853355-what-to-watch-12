import { Navigate } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { AppRoute, AuthorizationStatus } from '../../const';

type PrivateRouteProps = PropsWithChildren<{
  authorizationStatus: AuthorizationStatus;
}>;

function PrivateRoute({authorizationStatus, children}: PrivateRouteProps): JSX.Element {
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children as JSX.Element
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
