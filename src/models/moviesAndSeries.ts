export interface Data {
  category: string;
  isBookmarked: boolean;
  isTrending: boolean;
  rating: string;
  thumbnail: {
    regular: {
      large: string;
      medium: string;
      small: string;
    };
  };
  title: string;
  year: number;
}

export interface Trending extends Data {
  isTrending: true;
  thumbnail: {
    regular: {
      large: string;
      medium: string;
      small: string;
    };
    trending: {
      large: string;
      small: string;
    };
  };
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
