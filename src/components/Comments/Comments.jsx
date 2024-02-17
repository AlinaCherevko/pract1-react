import React from "react";
import PropTypes from "prop-types";
import { Comment } from "../Comment/Comment";
import { Grid } from "../Grid/Grid";
import { useGetAllCommentsQuery } from "../../redux/commentApi";
// import { comments } from '../../helpers/comments';

export const Comments = () => {
  const { data: comments, isSuccess, isError } = useGetAllCommentsQuery();
  return (
    <>
      {isSuccess && Array.isArray(comments) && (
        <Grid>
          {comments.map((comment) => (
            <Comment key={comment.id} {...comment} />
          ))}
        </Grid>
      )}

      {isError && <p>Something gone wrong..</p>}
    </>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape().isRequired),
};
