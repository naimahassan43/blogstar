import React from "react";

const Post = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h5>{props.author}</h5>
      <p>{props.description}</p>
    </div>
  );
};

export default Post;
