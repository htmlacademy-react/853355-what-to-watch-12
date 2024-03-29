import { AuthorizationStatus, NameSpace } from '../const';
import { State } from '../types/state';
import { Film, Films, Reviews } from '../types/films';

export const filmsSelector = (state: State): Films => state[NameSpace.Data].films.filmsArray;
export const filmSelector = (state: State): Film | null => state[NameSpace.Data].film;
export const similarFilmsSelector = (state: State): Films => state[NameSpace.Data].films.similarFilms;
export const reviewsSelector = (state: State): Reviews => state[NameSpace.Data].reviews;
export const genreSelector = (state: State): string => state[NameSpace.Data].genre;
export const isFilmsLoadingSelector = (state: State): boolean => state[NameSpace.Data].films.isFilmsDataLoading;
export const errorSelector = (state: State): string | null => state[NameSpace.Data].error;
export const isReviewSendingSelector = (state: State): boolean => state[NameSpace.Data].films.isReviewSending;

export const authorizationStatusSelector = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
