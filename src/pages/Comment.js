import react from "React";
import CommentWrite from "../components/CommentWrite";
import CommentCard from "../components/CommentCard";

const Comment = () => {
  return (
    <React.Fragment>
      <CommentWrite />
      {comment.map((c, i) => {
        return <CommentCard key={c.id} />;
      })}
    </React.Fragment>
  );
};

export default Comment;
