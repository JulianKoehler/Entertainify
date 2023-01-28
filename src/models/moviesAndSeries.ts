export interface MovieOrSeries {
  id: number;
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

export interface Trending extends MovieOrSeries {
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

export interface Movie extends MovieOrSeries {
  category: "Movie";
}

export interface ISeries extends MovieOrSeries {
  category: "TV Series";
}

export interface IBookmarked extends MovieOrSeries {
  isBookmarked: true;
}
