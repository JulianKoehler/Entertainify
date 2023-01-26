import { Data as Recommended } from "../../models/moviesAndSeries";

interface RecommendedContentProps {
  content: Recommended[];
}

const RecommendedContent = ({ content }: RecommendedContentProps) => {
  return (
    <div>
      <p>{JSON.stringify(content)}</p>
    </div>
  );
};

export default RecommendedContent;
