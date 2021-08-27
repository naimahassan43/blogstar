import React from "react";
import PropTypes from "prop-types";

const Post = (props) => {
  const { title, author, children } = props;
  return (
    <div>
      <h2>{title}</h2>
      <h5>{author}</h5>
      {children}
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  children: PropTypes.node,
};
export default Post;
