import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { filmsData } from './films-data/films-data';
import { userProcess } from './user-process/user-process';

export const rootReducer = combineReducers({
  [NameSpace.Data]: filmsData.reducer,
  [NameSpace.User]: userProcess.reducer,
});
