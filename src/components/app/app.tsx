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
import HistoryRouter from '../history-route/history-route';
import browserHistory from '../../browser-history';
import { useSelector } from 'react-redux';
import LoadingScreen from '../../pages/loading-screen/loading-screen';

function App(): JSX.Element {
  const isFilmsLoading = useSelector(getFilmsLoadingStatus);
  if (isFilmsLoading) {
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
            <PrivateRoute>
              <MyListScreen/>
            </PrivateRoute>
          }
        />
        <Route
          path={`${AppRoute.Review}/:id`}
          element={
            <PrivateRoute>
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
function getFilmsLoadingStatus(state: unknown): unknown {
  throw new Error('Function not implemented.');
}

