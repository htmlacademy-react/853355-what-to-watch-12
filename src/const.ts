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

export const DEFAULT_GENRE = 'All genres';
