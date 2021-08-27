import React from "react";
import Header from "./components/Header/Header";
import PostList from "./components/Posts/PostList";

function App() {
  const post1 = {
    title: "Hello",
    author: "John",
    description: "Lorem Ipsome",
  };
  const post2 = {
    title: "Hello Evryone",
    author: "John Smith",
    description: "Lorem Ipsome random post",
  };

  return (
    <div className="App">
      <Header />
      <PostList />
    </div>
  );
}

export default App;
