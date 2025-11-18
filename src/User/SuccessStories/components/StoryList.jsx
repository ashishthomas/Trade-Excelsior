import StoryCard from "./StoryCard";
import PropTypes from "prop-types";
export default function StoryList({ stories, expandedId, toggleExpand }) {
  return (
    <>
      {stories.map((story, index) => (
        <StoryCard
          key={story.id}
          story={story}
          index={index}
          expandedId={expandedId}
          toggleExpand={toggleExpand}
        />
      ))}
    </>
  );
}

StoryList.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.object).isRequired,
  expandedId: PropTypes.number,
  toggleExpand: PropTypes.func.isRequired,
};
