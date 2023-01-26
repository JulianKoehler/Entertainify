export interface Data {
  category: string;
  isBookmarked: boolean;
  isTrending: boolean;
  rating: string;
  thumbnail: object;
  title: string;
  year: number;
}

export interface Trending extends Data {
  isTrending: true;
}

export interface Movie extends Data {
  category: "Movie";
}

export interface ISeries extends Data {
  category: "TV Series";
}

export interface IBookmarked extends Data {
  isBookmarked: true;
}
