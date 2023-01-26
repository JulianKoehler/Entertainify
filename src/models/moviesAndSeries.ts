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

export interface Series extends Data {
  category: "TV Series";
}

export interface Bookmarked extends Data {
  isBookmarked: true;
}
