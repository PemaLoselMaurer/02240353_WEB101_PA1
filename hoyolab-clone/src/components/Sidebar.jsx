import React from "react";
import "../styles/Sidebar.css";
import postIcon from "../assets/post.png";
import imageIcon from "../assets/image.png";
import videoIcon from "../assets/video.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-container 1">
        <h3>Post now~</h3>
        <div className="post-options">
          <button>
            <img src={postIcon} alt="Post Icon" />
            Post
          </button>
          <button>
            <img src={imageIcon} alt="Image Icon" />
            Image
          </button>
          <button>
            <img src={videoIcon} alt="Video Icon" />
            Video
          </button>
        </div>
      </div>

      <div className="sidebar-container 2">
        <h3>Genshin Impact</h3>
        <ul>
          <li>Song of the Welkin Moon</li>
          <li>HoYoWiki</li>
          <li>Teyvat Interactive Map</li>
          <li>Enhancement Progression</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
