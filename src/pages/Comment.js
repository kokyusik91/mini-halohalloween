import React from "react";
import CommentWrite from "../components/CommentWrite";
import CommentCard from "../components/CommentCard";
import comment from "../redux/modules/comment";

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
