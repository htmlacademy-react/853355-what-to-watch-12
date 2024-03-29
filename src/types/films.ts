export type Film = {
  id: number;
  name: string;
  posterImage: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  videoLink: string;
  previewVideoLink: string;
  description: FilmDescription;
  rating: number;
  scoresCount: number;
  director: string;
  starring: string[];
  runTime: number;
  genre: string;
  released: number;
  isFavorite: boolean;
}

export type FilmDescription = {
  info: string;
  director: string;
  cast: string[];
}

export type PostReview = {
  comment: string;
  rating: number;
}

export type Review = {
  comment : string;
  rating : number;
  date : string;
  id : number;
  user : {
    id: number;
    name: string;
  };
}

export type Films = Film[];
export type Reviews = Review[];
