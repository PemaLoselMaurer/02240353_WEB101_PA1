import React from "react";
import Post from "./Post";
import "../styles/Feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <h2>Following</h2>
      <h2>Recommended</h2>
      <h2>Event</h2>
      <Post />
    </div>
  );
};

export default Feed;

