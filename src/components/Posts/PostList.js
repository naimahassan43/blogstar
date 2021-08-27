import React from "react";
import Post from "./Post";

const PostList = (props) => {
  console.log(props);
  const { post1, post2 } = props;
  return (
    <div>
      <Post title={post1.title} author={post1.author}>
        <p>{post1.description}</p>
      </Post>
      <Post title={post2.title} author={post2.author}>
        <p>{post2.description}</p>
      </Post>
    </div>
  );
};

export default PostList;
