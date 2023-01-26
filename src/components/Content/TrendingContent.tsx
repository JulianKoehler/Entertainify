import { Trending } from "../../models/moviesAndSeries";

interface TrendingContentProps {
  content: Trending[];
}

const TrendingContent = ({ content }: TrendingContentProps) => {
  return (
    <div>
      <p>{JSON.stringify(content)}</p>
    </div>
  );
};

export default TrendingContent;
