import React from "react";
import Post from "./Post";

const PostList = (props) => {
  console.log(props);
  const { post1, post2 } = props;
  return (
    <div>
      <Post
        title={post1.title}
        author={post1.author}
        description={post1.description}
      />
      <Post title={post2.title} author={post2.author} />
    </div>
  );
};

export default PostList;
