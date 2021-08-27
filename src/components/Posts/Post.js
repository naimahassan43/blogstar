import React from "react";

const Post = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h5>{props.author}</h5>
      {props.children}
    </div>
  );
};

export default Post;
