import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, DEFAULT_GENRE } from '../../const';
import { Films } from '../../types/films';
import { loadFilms, requireAuthorization, setError, setFilmsDataLoadingStatus, setGenre } from '../actions/action';

type InitialState = {
  genre: string;
  films: {
   filmsData: Films;
   isFilmsDataLoading: boolean;
  };
  authorizationStatus: AuthorizationStatus;
  error: string | null;
}

const initialState: InitialState = {
  genre: DEFAULT_GENRE,
  films: {
    filmsData: [],
    isFilmsDataLoading: false,
  },
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films.filmsData = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.films.isFilmsDataLoading = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
