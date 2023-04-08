import { Routes, Route } from 'react-router-dom';
import { AppRoute } from '../../const';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import MainScreen from '../../pages/main-screen/main-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import PlayerScreen from '../../pages/player-screen.tsx/player-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import { useAppSelector } from '../../hooks';
import { authorizationStatusSelector, isFilmsLoadingSelector } from '../../store/selectors';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(authorizationStatusSelector);
  const isFilmsDataLoading = useAppSelector(isFilmsLoadingSelector);

  if (isFilmsDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={
            <MainScreen />
          }
        />
        <Route
          path={AppRoute.MyList}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <MyListScreen/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Review}
          element={
            <PrivateRoute authorizationStatus={authorizationStatus}>
              <AddReviewScreen/>
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Film}/:id`}
          element={
            <FilmScreen />
          }
        />
        <Route
          path={`${AppRoute.Player}/:id`}
          element={
            <PlayerScreen/>
          }
        />
        <Route
          path={AppRoute.Login}
          element={
            <SignInScreen />
          }
        />
        <Route
          path='*'
          element={
            <NotFoundScreen />
          }
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
