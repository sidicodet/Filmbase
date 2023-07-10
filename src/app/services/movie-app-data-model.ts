export interface NowPlayingType {
  Name: string;
  Genre: string;
  Description: string;
  MoviePoster: string;
}

export interface MovieListType {
  Name: string;
}

export interface TheatresType {
  Theatres: string;
}

export interface ShowtimesType {
  Showtimes: string;
}

export interface TheatresNearYouType {
  Initials: string;
  Theatre: string;
  Address: string;
  Avatarcolor: string;
}

export interface MyPurchasesType {
  Name: string;
  Theatre: string;
  Purchased: string;
  MoviePoster: string;
}
