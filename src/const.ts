export const TIMEOUT_SHOW_ERROR = 2000;

export enum AppRoute {
  Login = '/login',
  Player = '/player',
  Root = '/',
  Film = '/film',
  MyList = '/myList',
  Review = '/review'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
}

export enum StatusCodes {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
}

export enum NameSpace {
  Data = 'DATA',
  User = 'USER',
}

export const DEFAULT_GENRE = 'All genres';
export const DEFAULT_FILMS_COUNT = 8;
export const STEP_SHOW_MORE = 8;
export const MORE_LIKE_COUNT = 4;
export const MAX_FILMS_COUNT = 999;
