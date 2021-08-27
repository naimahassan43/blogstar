import React from "react";
import Header from "./components/Header/Header";
import PostList from "./components/Posts/PostList";

function App() {
  const post1 = {
    title: "Hello",
    author: "John",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  };
  const post2 = {
    title: "Hello Everyone",
    author: "John Smith",
    description: "Lorem Ipsome random post",
  };

  return (
    <div className="App">
      <Header />
      <PostList post1={post1} post2={post2} />
    </div>
  );
}

export default App;
